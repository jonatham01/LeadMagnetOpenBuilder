import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesBuilderComponent } from './pages-builder/pages-builder.component';
import { PagesPanelComponent } from './pages-panel/pages-panel.component';
import { PagesEditComponent } from './pages-edit/pages-edit.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/admin/pagesbuilder',
    pathMatch:'full'
  },
  {
    path:'pagesbuilder',
    component:PagesBuilderComponent
  },
  {
    path:'pagespanel',
    component:PagesPanelComponent
  },
  {
    path:'edition/:title',
    component:PagesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
