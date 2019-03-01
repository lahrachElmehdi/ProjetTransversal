import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject < boolean >(this.TokenServive.loggedIn());
  
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value :boolean){

    this.loggedIn.next(value);

  }
 
  constructor(private TokenServive : TokenService) { }
}
