
export interface NewPage {
    name:string;
    resume:string;
    title:string;
    imageUrl:string;
    state:string;
    main:boolean;
    user:string|number;
    
  }

  export interface NewPageError{
    name:boolean;
    resume:boolean;
    title:boolean;
    imageUrl:boolean;
    state:boolean;
  }

  export interface ReponseNewPage extends NewPage{
    id:number
  }
  