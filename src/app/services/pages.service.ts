import { Injectable } from '@angular/core';
import { ComponentService } from './component.service';
import { NewPage } from '../models/newpage.model';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
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
    this.componentService.createComponent(uid, page,newDoc.id)
  }
}
