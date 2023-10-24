/*
  createPage(data:NewPage, uid:string, page:Pages){

    const path = `${uid}/landing/pages`;
    const newDoc = doc( collection(FirebaseDB, path) );
    setDoc(newDoc,data);
    this.componentService.createComponents(uid, page,newDoc.id)
  }

  createComponents(uid:string,page:Pages,pageId:string|number){

    let path = `${ uid }/landing/pages/${ pageId }/components`;

    var componentDTO:LandingComponentDTO[]= page.component.map(component=>{
        return{...component, pageId }
    });

    componentDTO.forEach((component) => {
      const newDoc = doc( collection( FirebaseDB, path) );
      setDoc( newDoc, component );
      this.containerService.createContainers(page, path, newDoc.id, pageId,component.ide);
    });

  }

  createContainers(page:Pages, path:string, componentId:string, pageId:number, ide:string){

    const newPath=`${path}/${componentId}/containers`;

    const containers = page.container.filter(data =>  data.componentId == ide);

    const containersDTO:LandingComponentDTO[]= containers.map(contentData=>{
        return{ ...contentData,componentId,pageId}
    });

    containersDTO.forEach(container => {
      const newDoc = doc(collection(FirebaseDB,newPath) );
      setDoc(newDoc,container);
      this.boxesService.createBoxes(page, newPath, newDoc.id, pageId,container.ide);
    });
  }

  createBoxes(page:Pages, path:string, componentId:string, pageId:number,ide:string){

    //console.log( ide);
   // console.log(path);

    const newPath = `${path}/${componentId}/boxes`;

    const boxes = page.boxes.filter(data => data.componentId == ide );
    
    const boxesDTO:LandingComponentDTO[] = boxes.map(data  => {
      return{...data,componentId,pageId}
    });

    boxesDTO.forEach(box => {
      const newDoc = doc( collection( FirebaseDB, newPath) );
      setDoc(newDoc,box);
      this.boxService.createBoxes(page,newPath,newDoc.id,pageId,box.ide);
    });
  }

    createBoxes(page:Pages, path:string, componentId:string, pageId:string,ide:string){
    
    const newPath = `${path}/${componentId}/box`

    const filterBoxes = page.box.filter(data => data.componentId === ide);

    const boxes = filterBoxes.map( box => {
      return {...box, componentId,pageId}
    });

    boxes.forEach( box => {
      const newDoc = doc( collection(FirebaseDB, newPath) );
      setDoc( newDoc, box);
      this.elementService.createElements(page,newPath, newDoc.id,pageId,ide);
    });
  }


   loadPage( uid:string, name:string ){

    const title = name.replace("-"," ");
    const path = `${uid}/landing/pages`;
    const pageCollection = collection(FirebaseDB, path);
    const doc = query(pageCollection, where("name", "==", title));
    console.log(doc);

  }


*/

