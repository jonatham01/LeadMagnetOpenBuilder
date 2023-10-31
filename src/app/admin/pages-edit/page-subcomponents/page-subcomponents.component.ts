import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { retry } from 'rxjs';
import { LandingBoxesResponse } from 'src/app/models/LandingComponent.model';
import { LandingElementResponse } from 'src/app/models/LandingElement.model';
import { BoxesElementService } from 'src/app/services/boxes-element.service';

@Component({
  selector: 'app-page-subcomponents',
  templateUrl: './page-subcomponents.component.html',
  styleUrls: ['./page-subcomponents.component.scss']
})
export class PageSubcomponentsComponent implements OnInit{

  @Input() pageId:number =1;
  @Input()containerId!:number |string;
  boxes:LandingBoxesResponse[]=[];
  
  constructor(
    private boxesService:BoxesElementService,
  ){}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if(this.containerId){
      this.boxesService.findAllByIdPage(this.pageId).pipe(retry(3))
      .subscribe( data => {
        this.boxes = data.filter((data: { componentId: string | number; })=>{ return data.componentId == this.containerId});
      });
    }
  }
}
