import { Injectable } from '@angular/core';
import { Pages } from '../models/Pages.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { LandingElementService } from './landing-element.service';
import { LandingComponentDTO } from '../models/LandingComponent.model';
import { HttpClient } from '@angular/common/http';
import { retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxElementService {

  constructor(
    private elementService: LandingElementService,
    private http:HttpClient,
  ) { }

  createBox(box:LandingComponentDTO,page:Pages,pageId:string| number){
    this.http.post<any>('/data/api/box/box',box).pipe(
      retry(3),
      tap(boxResponse => {
        const filteredBoxes = page.box.filter(data => { return data.componentId == boxResponse.ide});
        const boxesDTO = filteredBoxes.map( data => { return {...data,pageId,componentId:boxResponse.id} });
        boxesDTO.forEach(data=> this.elementService.createElement(data,page,pageId));
      })
    ).subscribe()
  }

  createBoxes(page:Pages, path:string, componentId:string, pageId:string,ide:string){
    
    const newPath = `${path}/${componentId}/box`

    const filterBoxes = page.box.filter(data => data.componentId === ide);

    const boxes = filterBoxes.map( box => {
      return {...box, componentId,pageId}
    });

    boxes.forEach( box => {
      const newDoc = doc( collection(FirebaseDB, newPath) );
      setDoc( newDoc, box);
      this.elementService.createElements(page,newPath, newDoc.id,pageId,ide);
    });
  }
}
