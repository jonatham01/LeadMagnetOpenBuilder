import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pages-builder',
  templateUrl: './pages-builder.component.html',
  styleUrls: ['./pages-builder.component.scss']
})
export class PagesBuilderComponent {

  constructor(
    private authService: AuthService,
  ){
    //this.authService.user$.subscribe(data=>console.log(data));
  }

}
