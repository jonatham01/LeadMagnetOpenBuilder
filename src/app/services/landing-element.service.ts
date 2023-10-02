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

  elementService(uid:string,boxes:LandingComponentResponse,page:Pages){

    let filterData= page.elements.filter(dataElemento=>{
      return dataElemento.componentId == boxes.ide;
    });

    filterData.forEach(element => {
      const newDoc = doc( collection( FirebaseDB, `${ uid }/landings/elements`) );
      setDoc( newDoc, element );
    })

  }



}
