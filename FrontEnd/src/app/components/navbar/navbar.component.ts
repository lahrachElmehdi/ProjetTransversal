import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/Auth/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;
  name = "E";
  constructor(private AuthService :AuthService , private router:Router,private TokenService:TokenService) { }

  ngOnInit() {
      this.AuthService.authStatus.subscribe(value => this.loggedIn = value)
  }

  logout(event : MouseEvent){
    event.preventDefault();
    this.TokenService.remove();
    this.AuthService.changeAuthStatus(false);
    this.router.navigateByUrl('/login');  
  }
}
