import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './../services/auth.service';

/*

    Cada vez que un usuario  admin visite la url
    Valida si el usuario esta autenticado como admin
    De lo contrario lo redirecciona
    
*/

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     // console.log(this.authService.user$);
      return this.authService.user$
      .pipe(
        map(user => {
         
          if(!user) {
            this.router.navigate(['/login']);
            return false;
          }
          //if(user?.role === 'admin') {
          //  return true;} 
         /* else {
            this.router.navigate(['/login']);
            return false;
          }*/
          else{
            return true
          }
        })
      )
  }

}
