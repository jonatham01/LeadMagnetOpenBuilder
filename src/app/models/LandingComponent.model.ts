

export interface LandingComponent{
    //box
    padding:string,
    paddingtop:number,
    paddingbottom:number,
    paddingleft:number,
    paddingright:number,

    margin:number,
    margintop:number,
    marginbottom:number,
    marginleft:number,
    marginright:number,

    width:string,
    height:string,
    
    //border
    border:string,
    borderstyle:string,
    borderwidth:number,
    bordercolor:string,
    borderradius:string,

    //text
    fontsize:number,
    color:string,
    fontfamily:string,
    fontweight:string,//-----------
    lineheight:number, 
    fsize:number,
  
    //colors
    background:string,
    backgroundcolor:string,
  
    //flexbox
    display:string,
    justifycontent:string,
    gap:number,
    gridtemplatecolumns:string,
    gridtemplaterows:string,
    flexdirection:string,
    alignitems:string,
    alignself:string,
    justifyitems:string,
    align:string,

    tag:string,

    ///estructura 
    componentId:number,
    pageId:number,
    numeration:number,
    id:number,
   
    name:string,
    title:string,
    content:string,
    block:boolean,
    backgroundcolorBlock:boolean,
    
    containerSizeBlock:boolean,
    cajaBlock:boolean,
    subBlock:boolean,
    paddingBlock:boolean,
    colorBlock:boolean,
    blockMenu:boolean,

    numbox:number;
    numelement:number,
    deleted:boolean
    
    
  }

  export interface LandingComponentDTO extends Partial<LandingComponent>{
    ide:number;
  }

  export interface LandingComponentResponse extends Partial<LandingComponent> {
    id:number;
    ide:number;
   }
