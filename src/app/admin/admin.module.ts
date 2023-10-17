import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesPanelComponent } from './pages-panel/pages-panel.component';
import { PostsPanelComponent } from './posts-panel/posts-panel.component';
import { ProductsPanelComponent } from './products-panel/products-panel.component';
import { PagesBuilderComponent } from './pages-builder/pages-builder.component';
import { PostsBuilderComponent } from './posts-builder/posts-builder.component';
import { ProductsBuilderComponent } from './products-builder/products-builder.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesFormComponent } from './pages-builder/pages-form/pages-form.component';
import { PagesTemplateFormComponent } from './pages-builder/pages-template-form/pages-template-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ImagesActiveComponent } from '../components/images-active/images-active.component';
import { PagesEditComponent } from './pages-edit/pages-edit.component';
import { PageContentComponent } from './pages-edit/page-content/page-content.component';
import { PageWidgetsComponent } from './pages-edit/page-widgets/page-widgets.component';
import { PagesListComponent } from './pages-panel/pages-list/pages-list.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PagesPanelComponent,
    PostsPanelComponent,
    ProductsPanelComponent,
    PagesBuilderComponent,
    PostsBuilderComponent,
    ProductsBuilderComponent,
    PagesFormComponent,
    PagesTemplateFormComponent,
    SideMenuComponent,
    ImagesActiveComponent,
    PagesEditComponent,
    PageContentComponent,
    PageWidgetsComponent,
    PagesListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ]
})
export class AdminModule { }
