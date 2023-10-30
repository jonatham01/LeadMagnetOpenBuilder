import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { retry } from 'rxjs';
import { LandingComponentResponse } from 'src/app/models/LandingComponent.model';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-page-components',
  templateUrl: './page-components.component.html',
  styleUrls: ['./page-components.component.scss']
})
export class PageComponentsComponent implements OnInit {

  @Input() pageId!:number;

  components:LandingComponentResponse[] = [];

  constructor(
    private componentService:ComponentService,
  ){}

  ngOnInit(): void {
          
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.pageId){
      this.componentService.findComponentsByIdPage(this.pageId).pipe(retry(3))
      .subscribe( data => {
        this.components = data;
      });
    }
}

}
