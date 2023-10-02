import { LandingComponent } from "./LandingComponent.model"

export interface LandingElementDTO extends Partial<LandingComponent> {
    id?:number,
    ide:number,
    content:string
   }

   export interface LandingElementResponse extends Partial<LandingComponent> {
    id:number,
    ide:number,
    content:string,
    numeration:number,
    componentId:number
   }