import { Component } from '@angular/core';
import { NewPage, NewPageError } from 'src/app/models/newpage.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-pages-form',
  templateUrl: './pages-form.component.html',
  styleUrls: ['./pages-form.component.scss']
})
export class PagesFormComponent {
  newPage:NewPage={
    "businessId":1,
    "name":"",
    "resume":"",
    "title":"",
    "imageUrl":"",
    "state":"Pendiente",
    "main":false,
    "user":1
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
