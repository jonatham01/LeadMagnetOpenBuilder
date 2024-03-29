import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { retry } from 'rxjs';
import { LandingElementResponse } from 'src/app/models/LandingElement.model';
import { EditPageService } from 'src/app/services/edit-page.service';
import { LandingElementService } from 'src/app/services/landing-element.service';

@Component({
  selector: 'app-page-elements',
  templateUrl: './page-elements.component.html',
  styleUrls: ['./page-elements.component.scss']
})
export class PageElementsComponent implements OnInit{

  @Input() pageId:number =1;
  @Input()boxId!:number |string;
  @Input()boxWidth:string | undefined="";
  @Input()boxDisplay:string | undefined="";
  @Input()boxAlign:string | undefined="";
  @Input()boxDirection:string | undefined="";
  @Input()boxJustify:string | undefined="";
  elements:LandingElementResponse[]=[];
  videos:any[]=[]
  elementsCounterActivated = false;
  elementsBuilderActivated= false;
  firstElement=1;
  lastElement=1;

  
  constructor(
    private elementService:LandingElementService,
    private _sanitizer: DomSanitizer,
    private editPageService:EditPageService,
  ){}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if(this.boxId){
      this.elementService.findAllByIdPage(this.pageId).pipe(retry(3))
      .subscribe( data => {
        
        let elementsFiltered = data.filter((data: { componentId: string | number; })=>{ return data.componentId == this.boxId})
        .map((element: { tag: string; content: string; })=>{

          if(element.tag=="video"){
            return {...element,video:this._sanitizer.bypassSecurityTrustResourceUrl(element.content)}
          }
          else{return element}
        }).sort((a: { ide: number; }, b: { ide: number; }) => a.ide - b.ide);

        this.elements =elementsFiltered;
        this.firstElement = elementsFiltered[0].ide;
        this.lastElement = elementsFiltered[elementsFiltered.length - 1].ide;
      });
    };
    }
  
  returnListaElementos(lista:LandingElementResponse){
    return lista.content.split(',');
  }
  activeEditPage(){
    this.editPageService.element$.subscribe(data=> console.log(data));
    this.elementsCounterActivated= true;

  }

  drop(event: CdkDragDrop<LandingElementResponse[]>) {
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
