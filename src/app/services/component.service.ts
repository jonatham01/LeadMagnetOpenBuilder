import { Injectable } from '@angular/core';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { LandingComponent, LandingComponentDTO, LandingComponentResponse } from '../models/LandingComponent.model';
import { Pages } from '../models/Pages.model';
import { ContainerService } from './container.service';
import { HttpClient } from '@angular/common/http';
import { retry, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(
    private containerService:ContainerService,
    private http:HttpClient,

  ) { }

  createComponent(component:LandingComponentDTO,page:Pages, pageId:number){
    
    this.http.post<LandingComponentResponse>('/data/api/component/create',component).pipe(
      retry(3),
      tap( componentResponse => {

        var containersFiltered= page.container.filter(containerData=>{
          return  containerData.componentId == componentResponse.ide;
         });

        const containers = containersFiltered.map(container=>{return {...container,pageId,componentId:componentResponse.id}});
        containers.forEach( container => this.containerService.createContainer(container, page, pageId));
      })
    ).subscribe();
  }

  /*
createComponents(uid:string,page:Pages,pageId:string|number){

    let path = `${ uid }/landing/pages/${ pageId }/components`;

    var componentDTO:LandingComponentDTO[]= page.component.map(component=>{
        return{...component, pageId }
    });

    componentDTO.forEach((component) => {
      const newDoc = doc( collection( FirebaseDB, path) );
      setDoc( newDoc, component );
      this.containerService.createContainers(page, path, newDoc.id, pageId,component.ide);
    });

  }
  */

}
