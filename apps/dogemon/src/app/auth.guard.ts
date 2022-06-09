import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
   providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      const url: string = state.url;

          return this.checkLogin(url);
      }

      checkLogin(url: string): true | UrlTree {
         console.log("Url: " + url)
         const val = localStorage.getItem('isUserLoggedIn');

         if(val != null && val == "true"){
            if(url == "/login")
               return this.router.parseUrl('/main-menu');
            else 
               return true;
         } else {
            return this.router.parseUrl('/login');
         }
      }
}