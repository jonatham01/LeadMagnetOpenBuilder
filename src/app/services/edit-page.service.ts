import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LandingElementResponse } from '../models/LandingElement.model';

@Injectable({
  providedIn: 'root'
})
export class EditPageService {

  private element = new BehaviorSubject<LandingElementResponse | null>(null);
  element$ = this.element.asObservable();

  constructor(
    private http: HttpClient,
    ) { }

    activeElement(activeElement:LandingElementResponse){
        this.element.next(activeElement);
    }
    clear(){
      this.element.next(null);
    }
    

}
