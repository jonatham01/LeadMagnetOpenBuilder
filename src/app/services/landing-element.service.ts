import { Injectable } from '@angular/core';
import { LandingComponentResponse } from '../models/LandingComponent.model';
import { Pages } from '../models/Pages.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { LandingElementDTO, LandingElementResponse } from '../models/LandingElement.model';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LandingElementService {

  constructor(
    private http:HttpClient,
  ) { }

  createElement(element:LandingElementDTO,page:Pages ,pageId:string|number){
    this.http.post<LandingElementResponse>('/data/api/element/create',element).pipe(retry(3))
    .subscribe( );
  }

  createElements(page:Pages, path:string, componentId:string, pageId:string,ide:string){

    const newPath = `${path}/${componentId}/elements`;

    const filterData:LandingElementDTO[] = page.elements.filter(dataElemento => dataElemento.componentId == ide);

    const elementDTO: LandingElementDTO[] = filterData.map(element => {
      return {...element,componentId,pageId}
    });

    elementDTO.forEach(element => {
      const newDoc = doc( collection( FirebaseDB, newPath) );
      setDoc( newDoc, element );
    })

  }



}
