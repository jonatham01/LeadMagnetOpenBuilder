import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { NewPage, NewPageError } from 'src/app/models/newpage.model';
import { AuthService } from 'src/app/services/auth.service';
import { FileServiceService } from 'src/app/services/file-service.service';
import { PagesService } from 'src/app/services/pages.service';
import { page3 } from 'src/app/designs/page3';
import { Pages } from 'src/app/models/Pages.model';


@Component({
  selector: 'app-pages-form',
  templateUrl: './pages-form.component.html',
  styleUrls: ['./pages-form.component.scss']
})
export class PagesFormComponent implements OnInit{

  pages:Pages[] = [page3]; //paginas prediseñadas

  imageActive = 0;

  //crear la paginacion
  paginationPage = 0;

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
    private fileService:FileServiceService,
    private pageService:PagesService, // createPage(data:NewPage, uid:string, page:Pages
  ){}

  ngOnInit(): void {
    this.authService.user$.subscribe(data=>this.newPage.user = data?.uid);
  }

  onChangeImg(event: Event) {

    const element = event.target as HTMLInputElement;

    const file = element.files?.item(0) as File;

    //validar si es una imagen sino mostrar un error

    this.imgTarget= file;

  }

  selectPage(page:number){
    this.imageActive = page;
  }

  createPage(){

    this.fileService.uploadFile(this.imgTarget as File).pipe(
     tap(file => this.newPage.imageUrl = file.filename)
    )
    .subscribe(file=>{
      this.pageService.createPage(
        this.newPage,
        this.newPage.user,
        this.pages[this.imageActive as number])
    } );
  }
}
