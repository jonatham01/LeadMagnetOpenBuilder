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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PagesFormComponent } from './pages-builder/pages-form/pages-form.component';
import { PagesTemplateFormComponent } from './pages-builder/pages-template-form/pages-template-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ImagesActiveComponent } from '../components/images-active/images-active.component';
import { PagesEditComponent } from './pages-edit/pages-edit.component';
import { PageContentComponent } from './pages-edit/page-content/page-content.component';
import { PageWidgetsComponent } from './pages-edit/page-widgets/page-widgets.component';
import { PagesListComponent } from './pages-panel/pages-list/pages-list.component';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { PageComponentsComponent } from './pages-edit/page-components/page-components.component';
import { PageComponentComponent } from './pages-edit/page-component/page-component.component';
import { PageContainersComponent } from './pages-edit/page-containers/page-containers.component';
import { PageContainerComponent } from './pages-edit/page-container/page-container.component';
import { PageSubcomponentsComponent } from './pages-edit/page-subcomponents/page-subcomponents.component';
import { PageSubcomponentComponent } from './pages-edit/page-subcomponent/page-subcomponent.component';
import { PageBoxesComponent } from './pages-edit/page-boxes/page-boxes.component';
import { PageBoxComponent } from './pages-edit/page-box/page-box.component';
import { PageElementsComponent } from './pages-edit/page-elements/page-elements.component';
import { PageElementComponent } from './pages-edit/page-element/page-element.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PageElementsCreatorComponent } from './pages-edit/page-widgets/page-elements-creator/page-elements-creator.component';
import { TitleElementComponent } from './pages-edit/page-widgets/page-elements-creator/title-element/title-element.component';
import { TextElementComponent } from './pages-edit/page-widgets/page-elements-creator/text-element/text-element.component';
import { ImageElementComponent } from './pages-edit/page-widgets/page-elements-creator/image-element/image-element.component';
import { VideoElementComponent } from './pages-edit/page-widgets/page-elements-creator/video-element/video-element.component';
import { ListElementComponent } from './pages-edit/page-widgets/page-elements-creator/list-element/list-element.component';
import { IconElementComponent } from './pages-edit/page-widgets/page-elements-creator/icon-element/icon-element.component';
import { SocialMediaElementComponent } from './pages-edit/page-widgets/page-elements-creator/social-media-element/social-media-element.component';
import { GraphElementComponent } from './pages-edit/page-widgets/page-elements-creator/graph-element/graph-element.component';
import { FormElementComponent } from './pages-edit/page-widgets/page-elements-creator/form-element/form-element.component';




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
    PagesListComponent,
    PageComponentsComponent,
    PageComponentComponent,
    PageContainersComponent,
    PageContainerComponent,
    PageSubcomponentsComponent,
    PageSubcomponentComponent,
    PageBoxesComponent,
    PageBoxComponent,
    PageElementsComponent,
    PageElementComponent,
    PageElementsCreatorComponent,
    TitleElementComponent,
    TextElementComponent,
    ImageElementComponent,
    VideoElementComponent,
    ListElementComponent,
    IconElementComponent,
    SocialMediaElementComponent,
    GraphElementComponent,
    FormElementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    DragDropModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class AdminModule { }
