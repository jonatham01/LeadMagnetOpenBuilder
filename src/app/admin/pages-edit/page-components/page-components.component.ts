import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { retry } from 'rxjs';
import { LandingComponentResponse } from 'src/app/models/LandingComponent.model';
import { LandingElementResponse } from 'src/app/models/LandingElement.model';
import { ComponentService } from 'src/app/services/component.service';
import { LandingElementService } from 'src/app/services/landing-element.service';

@Component({
  selector: 'app-page-components',
  templateUrl: './page-components.component.html',
  styleUrls: ['./page-components.component.scss']
})
export class PageComponentsComponent implements OnInit {

  @Input() pageId:number =1;
  components:LandingComponentResponse[] = [];
  elements:LandingElementResponse[] = [];

  constructor(
    private componentService:ComponentService,
    private elementService:LandingElementService,
    private sanitizer:DomSanitizer,
  ){}

  ngOnInit(): void {
          
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.pageId){
      this.componentService.findComponentsByIdPage(this.pageId).pipe(retry(3))
      .subscribe( data => {
        this.components = data;
        this.findElements(this.pageId)
      });
    }
  }
  
  findElements(id:number){
    this.elementService.findAllByIdPage(id).pipe(retry(3))
    .subscribe( data => {
      this.elements = data.map((element: { tag: string; content: string; })=>{
        if(element.tag=="video"){
          return {...element,video:this.sanitizer.bypassSecurityTrustResourceUrl(element.content)}
        }
        else{return element}
      })
    });
  }

  drop(event: CdkDragDrop<LandingComponentResponse[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }

}
