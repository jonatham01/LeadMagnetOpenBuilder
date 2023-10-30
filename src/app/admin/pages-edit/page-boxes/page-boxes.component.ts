import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { retry } from 'rxjs';
import { LandingBoxResponse, LandingBoxesResponse } from 'src/app/models/LandingComponent.model';
import { BoxElementService } from 'src/app/services/box-element.service';
import { BoxesElementService } from 'src/app/services/boxes-element.service';

@Component({
  selector: 'app-page-boxes',
  templateUrl: './page-boxes.component.html',
  styleUrls: ['./page-boxes.component.scss']
})
export class PageBoxesComponent implements OnInit{

  @Input() pageId:number =1;
  @Input()subcomponentId!:number |string;
  boxes:LandingBoxResponse[]=[];
  
  constructor(
    private boxesService:BoxElementService,
  ){}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if(this.subcomponentId){
      this.boxesService.findAllByIdPage(this.pageId).pipe(retry(3))
      .subscribe( data => {
        this.boxes = data.filter((data: { componentId: string | number; })=>{ return data.componentId == this.subcomponentId});
      });
    }
  }

}
