import { Injectable } from '@angular/core';
import { Pages } from '../models/Pages.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { LandingElementService } from './landing-element.service';

@Injectable({
  providedIn: 'root'
})
export class BoxElementService {

  constructor(
    private elementService: LandingElementService,
  ) { }

  createBox(page:Pages, path:string, componentId:string, pageId:string,ide:string){
    
    const newPath = `${path}/${componentId}/box`

    const filterBoxes = page.box.filter(data => data.componentId === ide);

    const boxes = filterBoxes.map( box => {
      return {...box, componentId,pageId}
    });

    boxes.forEach( box => {
      const newDoc = doc( collection(FirebaseDB, newPath) );
      setDoc( newDoc, box);
      this.elementService.createElement(page,newPath, newDoc.id,pageId,ide);
    });
  }
}
