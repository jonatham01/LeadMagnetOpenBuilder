import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { retry, switchMap, tap } from 'rxjs';
import { LandingBoxResponse, LandingBoxesResponse, LandingComponentResponse, LandingContainerResponse } from 'src/app/models/LandingComponent.model';
import { LandingElementResponse } from 'src/app/models/LandingElement.model';
import { ReponseNewPage } from 'src/app/models/newpage.model';
import { AuthService } from 'src/app/services/auth.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-pages-edit',
  templateUrl: './pages-edit.component.html',
  styleUrls: ['./pages-edit.component.scss']
})
export class PagesEditComponent implements OnInit {

  pageName:string ='';
  page:ReponseNewPage = {
    id:1,
    name:'',
    resume:'',
    title:'',
    imageUrl:'',
    state:'',
    main:false,
    user:1,
    userName:''
  };


 
  containers:LandingContainerResponse[] | null = null;
  subcomponents:LandingBoxesResponse[] | null = null;
  boxes:LandingBoxResponse[] | null = null;
  elements: LandingElementResponse[] | null = null;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private pageService:PagesService,
  ){}

  ngOnInit(): void {
    this.authService.user$.subscribe(userData => {
      ///
    });

    this.route.paramMap.pipe(
      tap(params=>{
        this.pageName = params.get('title') as string;
        
          this.pageService.findByTitle(this.pageName).pipe(
           
          ).subscribe( pageData=>{
            this.page = pageData;
          });
        
      })
    ).subscribe();
  }


}
