import { Component } from '@angular/core';
import { NewElementPageService } from 'src/app/services/new-element-page.service';

@Component({
  selector: 'app-page-elements-creator',
  templateUrl: './page-elements-creator.component.html',
  styleUrls: ['./page-elements-creator.component.scss']
})
export class PageElementsCreatorComponent {
  
  showElementBuilder =false;

  constructor(
    private elementsCreator:NewElementPageService ,
  ){}
    toInitCreator(){
      this.elementsCreator.showCounters();
    }
    toTittleBuilder(){
      this.elementsCreator.showCounters()
      this.showElementBuilder = true;
    }
    toTextBuilder(){
      this.elementsCreator.showCounters();
      this.showElementBuilder = true;
    }
    toImageBuilder(){
      this.elementsCreator.showCounters();
      this.showElementBuilder = true;
    }
    toVideoBuilder(){
      this.elementsCreator.showCounters();
      this.showElementBuilder = true;
    }
    toListBuilder(){
      this.elementsCreator.showCounters();
      this.showElementBuilder = true;
    }
    toIcontBuilder(){
      this.elementsCreator.showCounters();
      this.showElementBuilder = true;
    }
    toNetworkBuilder(){
      this.elementsCreator.showCounters();
      this.showElementBuilder = true;
    }
    toFormBuilder(){
      this.elementsCreator.showCounters();
      this.showElementBuilder = true;
    }
    toGraphBuilder(){
      this.elementsCreator.showCounters();
      this.showElementBuilder = true;
    }

}
