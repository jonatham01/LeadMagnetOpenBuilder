import { LandingComponent } from "./LandingComponent.model"

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
   }