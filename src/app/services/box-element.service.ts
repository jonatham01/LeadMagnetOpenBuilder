import { Injectable } from '@angular/core';
import { Pages } from '../models/Pages.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { LandingElementService } from './landing-element.service';
import { LandingBoxResponse, LandingComponentDTO } from '../models/LandingComponent.model';
import { HttpClient } from '@angular/common/http';
import { retry, tap } from 'rxjs';
import { LandingElementDTO } from '../models/LandingElement.model';

@Injectable({
  providedIn: 'root'
})
export class BoxElementService {

  constructor(
    private elementService: LandingElementService,
    private http:HttpClient,
  ) { }

  createBox(box:LandingComponentDTO,page:Pages,pageId: number){
    this.http.post<LandingBoxResponse>('/data/api/box/create',box).pipe(
      retry(3),
      tap(boxResponse => {
        const filteredElements = page.elements.filter(data => { return data.componentId == boxResponse.boxIde});
        const elementsDTO:LandingElementDTO[] = filteredElements.map( data => { return {...data,pageId,componentId:boxResponse.id} });
        elementsDTO.forEach(data=> this.elementService.createElement(data,page,pageId));
      })
    ).subscribe()
  }

  findAllByIdPage(id:number){

    return this.http.get<any>(`/data/api/box/show/page/${id}`);
    
  }
}
