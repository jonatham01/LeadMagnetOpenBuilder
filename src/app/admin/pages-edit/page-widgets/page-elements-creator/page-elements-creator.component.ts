import { Component } from '@angular/core';
import { NewElementPageService } from 'src/app/services/new-element-page.service';

@Component({
  selector: 'app-page-elements-creator',
  templateUrl: './page-elements-creator.component.html',
  styleUrls: ['./page-elements-creator.component.scss']
})
export class PageElementsCreatorComponent {
  
  showElementBuilder =false;
  title=false;
  text=false;
  image=false;
  video=false;
  list=false;
  icon=false;
  socialMedia=false;
  form=false;
  graph=false;

  constructor(
    private elementsCreator:NewElementPageService ,
  ){}
    toInitCreator(){
      this.elementsCreator.showCounters();
      this.showElementBuilder = true;
    }
    toTittleBuilder(){
      this.toInitCreator()
      this.title = true;
    }
    toTextBuilder(){
      this.toInitCreator()
      this.text = true;
    }
    toImageBuilder(){
      this.toInitCreator()
      this.image = true;
    }
    toVideoBuilder(){
      this.toInitCreator()
      this.image=true;
    }
    toListBuilder(){
      this.toInitCreator()
      this.list= true;
    }
    toIconBuilder(){
      this.toInitCreator()
      this.icon = true;
    }
    toNetworkBuilder(){
      this.toInitCreator()
      this.socialMedia = true;
    }
    toFormBuilder(){
      this.toInitCreator()
      this.form = true;
    }
    toGraphBuilder(){
      this.toInitCreator()
      this.graph = true;
    }

}
