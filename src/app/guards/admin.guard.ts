import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './../services/auth.service';

import { getAuth } from "firebase/auth";
import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      /* usuario firebase
      return  new Promise((myResolve, myReject) =>{

        onAuthStateChanged(FirebaseAuth, (user) =>{
          if ( user ) {
            const { uid, email, displayName} = user;
            if (displayName && email) {this.authService.validateUser(uid, displayName, email,);}
            myResolve(true);
          }
          else{
            myResolve(false);
          }
          
        });

      });
      */
    
      return this.authService.user$
      .pipe(
        map(user => {
          if(!user) {
            this.router.navigate(['/login']);
            return false;
          }
          else{
            return true
          }
        })
      )
  
  }

}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  => {
  return inject(AdminGuard).canActivate(next, state);
}
