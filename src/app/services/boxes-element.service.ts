import { Injectable } from '@angular/core';
import { BoxElementService } from './box-element.service';
import { Pages } from '../models/Pages.model';
import { LandingComponentDTO } from '../models/LandingComponent.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

@Injectable({
  providedIn: 'root'
})
export class BoxesElementService {

  constructor(
    private boxService:BoxElementService
  ) { }

  createBoxes(page:Pages, path:string, componentId:string, pageId:string,ide:string){

    const newPath = `${path}/${componentId}/boxes`;

    const boxes = page.boxes.filter(data => data.componentId == componentId );
    
    const boxesDTO:LandingComponentDTO[] = boxes.map(data  => {
      return{...data,componentId,pageId}
    });

    boxesDTO.forEach(box => {
      const newDoc = doc( collection( FirebaseDB, newPath) );
      setDoc(newDoc,box);
      this.boxService.createBox(page,newPath,newDoc.id,pageId,box.ide);
    });
  }
  
}
