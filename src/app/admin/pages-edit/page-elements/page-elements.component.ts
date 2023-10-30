import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { retry } from 'rxjs';
import { LandingElementResponse } from 'src/app/models/LandingElement.model';
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

  
  constructor(
    private elementService:LandingElementService,
    private _sanitizer: DomSanitizer,
  ){}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if(this.boxId){
      this.elementService.findAllByIdPage(this.pageId).pipe(retry(3))
      .subscribe( data => {
        this.elements = data.filter((data: { componentId: string | number; })=>{ return data.componentId == this.boxId})
        .map((element: { tag: string; content: string; })=>{

          if(element.tag=="video"){
            console.log(element.content)
            return {...element,video:this._sanitizer.bypassSecurityTrustResourceUrl(element.content)}
          }
          else{return element}
        })
      });
    };
    console.log(this.videos)
    }
  

  returnListaElementos(lista:LandingElementResponse){
    return lista.content.split(',');
  }

  toVideo(video:string){
    var urlvideo=this._sanitizer.bypassSecurityTrustResourceUrl(video);
    console.log(urlvideo);
    return urlvideo;
    
  }
}
