import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-pages-panel',
  templateUrl: './pages-panel.component.html',
  styleUrls: ['./pages-panel.component.scss']
})
export class PagesPanelComponent implements OnInit{

  notes:any[]= [];

  constructor(
    private pageServices:PagesService,
    private route:ActivatedRoute,
    private authService:AuthService
  ){}

  ngOnInit(): void {
    this.authService.user$.subscribe(userData => {
      this.route.paramMap.pipe(
        tap(params => this.notes = this.pageServices.showPages(userData?.uid))
      );
    });
  }
}
