import { Injectable } from '@angular/core';
import { LandingComponentResponse } from '../models/LandingComponent.model';
import { Pages } from '../models/Pages.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';


@Injectable({
  providedIn: 'root'
})
export class LandingElementService {

  constructor() { }

  elementService(page:Pages, path:string, componentId:string, pageId:string,ide:string){

    const newPath= `${path}/${componentId}/elements`;

    let filterData= page.elements.filter(dataElemento=>{
      return dataElemento.componentId == ide;
    });

    filterData.forEach(element => {
      const newDoc = doc( collection( FirebaseDB, newPath) );
      setDoc( newDoc, element );
    })

  }



}
