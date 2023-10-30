
export interface NewPage {
    name:string;
    resume:string;
    title:string;
    imageUrl:string;
    state:string;
    main:boolean;
    user:string|number;
    userName?:string;
    
  }

  export interface NewPageError{
    name:boolean;
    resume:boolean;
    title:boolean;
    imageUrl:boolean;
    state:boolean;
    username?:string;
  }

  export interface ReponseNewPage extends NewPage{
    id:number
  }
  