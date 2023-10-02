import { componentesLandingDTO, elementosLandingDTO } from 'src/app/models/componentesLanding';
import { Pages } from '../models/pages';

  export const page3:Pages={
    id:1,
    img:'../../../../../../assets/galeria/portada1.jpg',
    color:'red',
    ruta:"https://storage.googleapis.com/website-production/uploads/2023/01/Group-9802-13.png",

  //main-contenedores-contenedor-cajas-caja-elemento

    contenedores:[
    
    {
      ide:1,

      numeration:1,

      title:'Portada',

      paddingtop:0,

      paddingbottom:0,

      paddingleft:0,

      paddingright:0,

      margintop:0,

      marginbottom:0,

      marginright:0,

      marginleft:0,

      backgroundcolor: 'white',

      display: 'flex',

      justifycontent: 'center',
    },

    {
      ide:2,

      numeration:2,

      name:'todo el eje',

      paddingtop:0,

      paddingbottom:0,

      paddingleft:0,

      paddingright:0,

      margintop:0,

      marginbottom:0,

      marginright:0,

      marginleft:0,

      display:' flex',

      justifycontent: 'center',

      backgroundcolor:' aqua',
    }
    ],

    contenedor:[
        
    {
        ide:1,
  
        componentId:1,
  
        numeration:1,
  
        display: 'flex',
  
        flexdirection:'column',
  
        width: '1190px',
        
        paddingtop:40,
  
        paddingbottom:40,
  
        paddingleft:72,
  
        paddingright:72
    },

    {
      ide:2,

      componentId:2,

      numeration:1,

      display: 'flex',

      flexdirection:'column',

      width: '1190px',
      
      paddingtop:150,

      paddingbottom:150,

      paddingleft:72,

      paddingright:72
    }

  ],
//grupo
   cajas:[
    {
        ide:1,
  
        componentId:1,
  
        numeration:1,
  
        display:'grid',
  
        gridtemplatecolumns: '1fr 1fr',
        
        gap: 40
    },

    {
      ide:2,

      componentId:2,

      numeration:1,

      display:'grid',

      gridtemplatecolumns: '1fr',

      //gridtemplaterows:'none',   
      gap: 0
    },

    {
      ide:3,

      componentId:2,

      numeration:2,

      display:'grid',

      gridtemplatecolumns: '1fr 1fr',

      //gridtemplaterows:'none',   
      gap: 0
    }

    
   ],
/*
4--1
5--2
3-3
1--4
2--5
*/
    caja:[
    {
      ide:1,

      componentId:1,

      numeration:1,

      display:'flex',

      flexdirection:'column',

      border:'none',

      padding:'0'
    },

    {
      ide:2,

      componentId:1,

      numeration:2,

      display:'flex',

      flexdirection:'column',

      alignitems:'center',

      border:'none',

      padding:'0'
    },

    {
        ide:3,
  
        componentId:2,
  
        numeration:1,
  
        display:'flex',
  
        flexdirection:'column',
  
        alignitems:'center',
  
        justifycontent:'center',
  
        border:'none',
  
        padding:'16px'
  
    },

    {
      ide:4,

      componentId:3,

      numeration:1,

      display: 'flex',

      flexdirection:'column',

      alignitems: 'center',

      justifycontent: 'center',

      padding:'16px',

      //en el html al crearlo solo se dan 3 opciones ya creadas
      border: '4px solid white'

    },

    {
      ide:5,

      componentId:3,

      numeration:2,
      
      display: 'flex',

      flexdirection:'column',

      alignitems: 'start',

      justifycontent: 'start',

      border: 'none',

      padding:'0 10%',

      alignself:'center'

    }
    
   

    
  ],

    elementos:[
    
    {
      ide:1,

      componentId:1,

      numeration:1,

      tag:'h1',

      fontsize: 64,

      content:'Elige por dónde quieres empezar',

      fontfamily: 'Open Sans',

      color:'black'

    },

    {
      ide:2,

      componentId:1,

      numeration:2,

      tag:'p',

      fontsize: 16,

      fontweight:'500',

      lineheight: 25,

      fontfamily: 'Open Sans',

      content:'En nuestro sitio la información está organizada de forma tal que puedas sacarle el mayor provecho. Tenemos 4 rutas de aprendizaje para que te conviertas en un crack en el tema que más te interesa. En cada guía de aprendizaje tenemos, Posts, Plantillas, Cursos, Pack, Videos y muchos más contenidos. ',

      color:'black'
      
    },

    {
      ide:3,

      componentId:1,

      numeration:3,

      tag:'p',

      fontsize: 16,

      fontweight:'500',

      lineheight: 25,

      fontfamily: 'Open Sans',

      content:'Las guías te ayudarán a ir adquiriendo los conocimientos y habilidades que necesitas paso a paso.',

      color:'black'
      
    },

    {
      ide:4,

      componentId:2,

      numeration:1,

      tag:'video',

      width: '100%',

      content:'https://www.youtube.com/watch?v=NFFhc91mfOY'
      
    },
    
    {
      ide:5,

      componentId:3,

      numeration:1,

      tag:'h1',

      fontsize: 40,

      fsize: 40,

      content:'DIY Landing Pages',

      fontfamily: 'Open Sans',
      
      color:'black'
    },

    {
      ide:6,

      componentId:3,

      numeration:2,

      tag:'p',

      fontsize: 22,

      fsize: 22,

      fontweight:'500',

      lineheight: 25,

      fontfamily: 'Open Sans',

      content:'Achieve better campaign performance with landing pages you can quickly build, test, and optimize.',

      color:'black'
      
    },
    
    {
      ide:7,

      componentId:4,

      numeration:1,

      tag:'img',

      width: '100%',

      bordercolor:'white',

      borderstyle:'none',

      borderwidth:4,

      paddingtop:0,

      paddingbottom:0,

      paddingleft:0,

      paddingright:0,

      content:'https://storage.googleapis.com/website-production/uploads/2023/01/Group-9802-13.png'
    },


    {
      ide:8,

      componentId:5,

      numeration:1,

      tag:'h2',

      fontsize: 32,

      fsize: 32,

      fontfamily: 'Open Sans',

      content:'Responsive landing pages.',

      color:'black'
      
    },

    {
      ide:9,

      componentId:5,

      numeration:2,

      tag:'h3',

      fontsize: 22,

      fsize: 22,

      fontfamily: 'Open Sans',

      content:'Build landing pages without a developer',

      color:'black'
    },

    {
      ide:10,

      componentId:5,

      numeration:3,

      tag:'p',

      fontsize: 16,

      fsize: 16,

      fontweight:'500',

      lineheight: 25,

      fontfamily: 'Open Sans',

      content:'No developer needed! Design and deploy responsive, relevant, and on-brand landing pages in minutes. Your team will love the simplicity and power.',
      
      color:'black'
    },

    {
      ide:11,

      componentId:5,

      numeration:4,

      tag:'ul',

      fontsize:20,

      fsize: 20,

      fontweight:'400',

      paddingtop:0,

      margintop:0,

      content: 'Web resposive adaptadas a dispositivos moviles, Mayor grado de personalización en menos tiempo',

      color:'black'
    },

    {
      ide:12,

      componentId:5,

      numeration:5,

      tag:'button',

      color: 'black',

      backgroundcolor: 'white',

      fontfamily: 'Open Sans',

      borderradius: '20 px',

      width:'max-content',

      padding: '8px 24px',

      paddingtop:8,

      paddingbottom:8,

      paddingleft:24,

      paddingright:24,

      fontsize: 14,

      fsize: 14,

      content:'START MY 14-DAY TRIAL'
    }
  ],

  }