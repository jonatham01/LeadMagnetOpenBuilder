import { Injectable } from '@angular/core';
import { BoxElementService } from './box-element.service';
import { Pages } from '../models/Pages.model';
import { LandingBoxesResponse, LandingComponentDTO } from '../models/LandingComponent.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { HttpClient } from '@angular/common/http';
import { retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxesElementService {

  constructor(
    private boxService:BoxElementService,
    private http:HttpClient,
  ) { }

  createBox(box:LandingComponentDTO,page:Pages, pageId:number){

    this.http.post<LandingBoxesResponse>('/data/api/subcomponent/create',box).pipe(
      retry(3),
      tap( boxResponse => {
        const boxFiltered = page.boxes.filter( data=> {return data.componentId == boxResponse.boxesIde });
        const boxesDTO = boxFiltered.map(data=>{return {...data,pageId,componentId:boxResponse.id} });
        boxesDTO.forEach(boxData=> { this.boxService.createBox(boxData,page,pageId) })
      })
    ).subscribe()
  }

}
