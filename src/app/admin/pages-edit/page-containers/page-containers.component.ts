import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { retry } from 'rxjs';
import { LandingContainerResponse } from 'src/app/models/LandingComponent.model';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-page-containers',
  templateUrl: './page-containers.component.html',
  styleUrls: ['./page-containers.component.scss']
})
export class PageContainersComponent implements OnInit{

  @Input() pageId:number =1;
  @Input() componentId!:number |string;
  containers:LandingContainerResponse[]=[];
  
  constructor(
    private containerService:ContainerService,
  ){}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
   
    if(this.componentId){
      this.containerService.findAllByIdPage(this.pageId).pipe(retry(3))
      .subscribe( data => {
        this.containers = data.filter((data: { componentId: string | number; })=>{ return data.componentId == this.componentId});
      });
    }
  }

}
