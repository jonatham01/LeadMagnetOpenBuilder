import { Injectable } from '@angular/core';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { LandingComponent, LandingComponentDTO, LandingComponentResponse } from '../models/LandingComponent.model';
import { Pages } from '../models/Pages.model';
import { ContainerService } from './container.service';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(
    private containerService:ContainerService
  ) { }

  createComponent(uid:string,page:Pages,pageId:string){

    let path = `${ uid }/landings/pages/${ pageId }/components`;

    var componentDTO:LandingComponentDTO[]= page.component.map(component=>{
        return{...component, pageId }
    });

    componentDTO.forEach((component) => {
      const newDoc = doc( collection( FirebaseDB, path) );
      setDoc( newDoc, component );
      this.containerService.createContainer(page, path, newDoc.id, pageId,component.ide);
    });

  }

}
