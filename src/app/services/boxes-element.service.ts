import { Injectable } from '@angular/core';
import { BoxElementService } from './box-element.service';
import { Pages } from '../models/Pages.model';

@Injectable({
  providedIn: 'root'
})
export class BoxesElementService {

  constructor(
    private boxService:BoxElementService
  ) { }

  boxesService(page:Pages, path:string, componentId:string, pageId:string,ide:string){

    const newPath = `${path}/${componentId}/boxes`;

    const boxes = page.boxes.filter(data => data.componentId == componentId );
    
  }
  
}
