import { Injectable } from '@angular/core';
import { Pages } from '../models/Pages.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { LandingComponentDTO, LandingContainerDTO, LandingContainerResponse } from '../models/LandingComponent.model';
import { BoxesElementService } from './boxes-element.service';
import { HttpClient } from '@angular/common/http';
import { retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(
    private boxesService:BoxesElementService,
    private http:HttpClient,
  ) { }

  createContainer(container:LandingComponentDTO,page:Pages, pageId:number|string){
    
    this.http.post<LandingContainerResponse>('/data/api/container/create',container).pipe(
      retry(3),
      tap(containerResponse=>{
    
        var BoxesFiltered= page.boxes.filter(containerData=>{
          return  containerData.componentId == containerResponse.containerIde;
         });

        const boxes = BoxesFiltered.map(boxes=>{return {...boxes,pageId,componentId:containerResponse.id}});
        boxes.forEach(box => this.boxesService.createBox(box,page,pageId,));
      })
    ).subscribe()
  }


  createContainers(page:Pages, path:string, componentId:string, pageId:string, ide:string){

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
