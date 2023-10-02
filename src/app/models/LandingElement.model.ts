import { LandingComponent } from "./LandingComponent.model"

export interface LandingElementDTO extends Partial<LandingComponent> {
    id?:string,
    ide:string,
    content:string
   }

   export interface LandingElementResponse extends Partial<LandingComponent> {
    id:string,
    ide:string,
    content:string,
    numeration:number,
    componentId:string
   }