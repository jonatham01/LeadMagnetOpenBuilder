import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { ReponseNewPage } from 'src/app/models/newpage.model';
import { AuthService } from 'src/app/services/auth.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-pages-panel',
  templateUrl: './pages-panel.component.html',
  styleUrls: ['./pages-panel.component.scss']
})
export class PagesPanelComponent implements OnInit{

  pages:ReponseNewPage[]= [];

  user:any = {};

  constructor(
    private pageServices:PagesService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router,
  ){}

  ngOnInit(): void {
    this.authService.user$.subscribe(userData => {
      this.user = userData;
      this.pageServices.findPages().subscribe(dataPages=>this.pages=dataPages);
      

    });
  }

  toNavigate(web:string){
    this.router.navigate([web]);
  }
}
