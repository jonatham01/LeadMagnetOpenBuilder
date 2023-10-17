import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-pages-panel',
  templateUrl: './pages-panel.component.html',
  styleUrls: ['./pages-panel.component.scss']
})
export class PagesPanelComponent implements OnInit{

  pages:any[]= [];

  constructor(
    private pageServices:PagesService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router,
  ){}

  ngOnInit(): void {
    this.authService.user$.subscribe(userData => {
      this.pages = this.pageServices.showPages(userData?.uid);
      //console.log(this.pageServices.showPages(userData?.uid))

    });
  }

  toNavigate(web:string){
    this.router.navigate([web]);
  }
}
