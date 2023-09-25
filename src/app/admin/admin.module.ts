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


@NgModule({
  declarations: [
    DashboardComponent,
    PagesPanelComponent,
    PostsPanelComponent,
    ProductsPanelComponent,
    PagesBuilderComponent,
    PostsBuilderComponent,
    ProductsBuilderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
