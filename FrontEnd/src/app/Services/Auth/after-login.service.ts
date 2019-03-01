import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()

export class AfterLoginService implements CanActivate {

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean |
   UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //return this.TokenService.loggedIn();
    
    if(!this.TokenService.loggedIn()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  constructor( private TokenService:TokenService,private router:Router) { }
}
