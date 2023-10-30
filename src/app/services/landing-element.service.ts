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

  private url = '/data/api/element';

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

  findAllByIdPage(id:number){

    return this.http.get<any>(`${this.url}/show/page/${id}`);
    
  }

  deleteElement(id:number){
    return this.http.delete<any>(`${this.url}/delete/${id}`);
  }

  update(id:number,element:LandingElementDTO){
    return this.http.put<LandingElementResponse>(`${this.url}/update/${id}`,element)
  }

  updateElements(id:number,element:LandingElementDTO[]){
    element.forEach(element=>{
      this.update(id,element);
    });
  }



}
