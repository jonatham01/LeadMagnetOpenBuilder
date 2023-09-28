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
    PagesTemplateFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
