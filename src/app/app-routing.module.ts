import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/admin.guard';
import { LoginComponent } from './pages/auth/login/login.component';



const routes: Routes = [
  {
    path:'admin',
    canActivate:[AuthGuard],
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
