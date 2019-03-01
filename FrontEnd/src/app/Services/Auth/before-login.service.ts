import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{
  canActivate(
      route: import("@angular/router").ActivatedRouteSnapshot,
      state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> 
    {
    
    return !this.TokenService.loggedIn();
  }

  constructor(private TokenService:TokenService,private router:Router) { }
}
