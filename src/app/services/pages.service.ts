import { Injectable } from '@angular/core';
import { ComponentService } from './component.service';
import { NewPage } from '../models/newpage.model';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { Pages } from '../models/Pages.model';
import { HttpClient } from '@angular/common/http';
import { map, retry, tap } from 'rxjs';
import { LandingComponentDTO } from '../models/LandingComponent.model';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private newPageUrl = '/data/api/pages';

  constructor(
    private componentService: ComponentService,
    private http:HttpClient,
  ) { }

  createNewPage(data:NewPage, uid:string, page:Pages){

    const path= `${this.newPageUrl}/create`;
    this.http.post<any>(path,data).pipe(
      retry(3),
      tap( newPage => {
        const componentsDTO:LandingComponentDTO[]= page.component.map(
          contentData=>{ return{...contentData,pageId:newPage.id} }
        );
        componentsDTO.forEach(component=>{ this.componentService.createComponent(component,page,newPage.id) });

      })
    ).subscribe();
  }

  createPage(data:NewPage, uid:string, page:Pages){

    const path = `${uid}/landing/pages`;
    const newDoc = doc( collection(FirebaseDB, path) );
    setDoc(newDoc,data);
    this.componentService.createComponents(uid, page,newDoc.id)
  }

  loadPage( uid:string, name:string ){

    const title = name.replace("-"," ");
    const path = `${uid}/landing/pages`;
    const pageCollection = collection(FirebaseDB, path);
    const doc = query(pageCollection, where("name", "==", title));
    console.log(doc);

  }

  showPages(uid:string){
    const pagesCollection = collection(FirebaseDB, `${uid}/landing/pages`);
    const docs =  getDocs(pagesCollection);
    const notes: any[] = [];
    docs.then(data=>{
      data.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
        //console.log({ id: doc.id, ...doc.data() });
      });
    })
    return notes;
    
  }
}
