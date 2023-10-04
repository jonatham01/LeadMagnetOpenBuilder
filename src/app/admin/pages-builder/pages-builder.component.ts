import { Component } from '@angular/core';
import { NewPage, NewPageError } from 'src/app/models/newpage.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pages-builder',
  templateUrl: './pages-builder.component.html',
  styleUrls: ['./pages-builder.component.scss']
})
export class PagesBuilderComponent {

  newPage:NewPage={

    "name":"",
    "resume":"",
    "title":"",
    "imageUrl":"",
    "state":"Pendiente",
    "main":false,
    "user":'1'
  }

  newPageError:NewPageError = {
    name:false,
    resume:false,
    title:false,
    imageUrl:false,
    state:false,
  }

  imgTarget: File | undefined = undefined ;

  constructor(
    private authService: AuthService,
  ){
    //this.authService.user$.subscribe(data=>console.log(data));
  }

  onChangeImg(event: Event) {

    const element = event.target as HTMLInputElement;

    const file = element.files?.item(0);

    if(file) {this.imgTarget= file;}
    
  }
}

