import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LandingElementResponse } from '../models/LandingElement.model';

@Injectable({
  providedIn: 'root'
})
export class NewElementPageService {

  private element = new BehaviorSubject<LandingElementResponse | null>(null);
  element$ = this.element.asObservable();

  private activeCounter = new BehaviorSubject<boolean>(false);
  activeCounter$ = this.activeCounter.asObservable();

  constructor(
    private http: HttpClient,
    ) { }

    showCounters(){
      this.activeCounter.next(true);
    }
    hideCounters(){
      this.activeCounter.next(false);
    }

    newElement(activeElement:LandingElementResponse){
        this.element.next(activeElement);
    }
    clear(){
      this.element.next(null);
    }
    
}
