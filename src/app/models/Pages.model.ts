import { LandingComponentDTO } from "./LandingComponent.model";
import { LandingElementDTO } from "./LandingElement.model";

export interface Pages{
    color?:string,
    ruta?:string,
    contenedores:LandingComponentDTO[],
    contenedor: LandingComponentDTO[],
    cajas:LandingComponentDTO[],
    caja:LandingComponentDTO[],
    elementos:LandingElementDTO[],
    img:string,
    id:number
    
}