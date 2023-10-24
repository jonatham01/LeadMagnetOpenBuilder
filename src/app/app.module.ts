import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgStyle } from '@angular/common';
import { LoginComponent } from './pages/auth/login/login.component';
import { BtnComponent } from './components/btn/btn.component';

import { environment } from '../environments/environment';


//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { TokenInterceptor } from './interceptors/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

    FormsModule,
    HttpClientModule,
    NgStyle,

    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
/*
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,*/

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
