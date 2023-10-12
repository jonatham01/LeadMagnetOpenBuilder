import { Injectable } from '@angular/core';
import { ComponentService } from './component.service';
import { NewPage } from '../models/newpage.model';
import { collection, doc, query, setDoc, where } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { Pages } from '../models/Pages.model';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(
    private componentService: ComponentService,
  ) { }

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

  }
}
