import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-pages-edit',
  templateUrl: './pages-edit.component.html',
  styleUrls: ['./pages-edit.component.scss']
})
export class PagesEditComponent implements OnInit {

  pageName:string|null =null;

  
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private pageService:PagesService,
  ){}

  ngOnInit(): void {
    this.authService.user$.subscribe(userData => {
      this.route.paramMap.pipe(
        tap(params=>{
          this.pageName = params.get('title')
          if(this.pageName){this.pageService.loadPage(userData?.uid,this.pageName)}
        })
      );
    });
  }


}
