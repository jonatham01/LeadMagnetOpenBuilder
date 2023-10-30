import { LandingComponent } from "./LandingComponent.model";
import {SafeResourceUrl } from '@angular/platform-browser';


export interface LandingElementDTO extends Partial<LandingComponent> {

    ide:string| number,
    content:string
   }

   export interface LandingElementResponse extends Partial<LandingComponent> {
    id:string| number,
    ide:string| number,
    content:string,
    numeration:number,
    componentId:string| number,
    video?:SafeResourceUrl,
   }