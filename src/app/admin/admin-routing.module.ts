import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesBuilderComponent } from './pages-builder/pages-builder.component';
import { PagesPanelComponent } from './pages-panel/pages-panel.component';

const routes: Routes = [
  {
    path:'pagesbuilder',
    component:PagesBuilderComponent
  },
  {
    path:'pagespanel',
    component:PagesPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
