import { Injectable } from '@angular/core';
import { Pages } from '../models/Pages.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { LandingComponentDTO } from '../models/LandingComponent.model';
import { BoxesElementService } from './boxes-element.service';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(
    private boxesService:BoxesElementService
  ) { }

  createContainer(page:Pages, path:string, componentId:string, pageId:string, ide:string){

    const newPath=`${path}/${componentId}/containers`;

    const containers = page.container.filter(data =>  data.componentId == ide);

    const containersDTO:LandingComponentDTO[]= containers.map(contentData=>{
        return{ ...contentData,componentId,pageId}
    });

    containersDTO.forEach(container => {
      const newDoc = doc(collection(FirebaseDB,newPath) );
      setDoc(newDoc,container);
      this.boxesService.createBoxes(page, newPath, newDoc.id, pageId,container.ide);
    });
  }
}
