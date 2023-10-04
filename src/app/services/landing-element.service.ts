import { Injectable } from '@angular/core';
import { LandingComponentResponse } from '../models/LandingComponent.model';
import { Pages } from '../models/Pages.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { LandingElementDTO } from '../models/LandingElement.model';


@Injectable({
  providedIn: 'root'
})
export class LandingElementService {

  constructor() { }

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
