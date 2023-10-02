import { LandingComponentDTO } from "./LandingComponent.model";
import { LandingElementDTO } from "./LandingElement.model";

export interface Pages{
    color?:string,
    path?:string,
    component:LandingComponentDTO[],
    container: LandingComponentDTO[],
    boxes:LandingComponentDTO[],
    box:LandingComponentDTO[],
    elements:LandingElementDTO[],
    img:string,
    id:number
    
}