import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { TokenService } from 'src/app/Services/Auth/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

  public form = {
    email: null,
    password: null
  };
  
  public error = null;

  constructor(
    private UserService: UserService,
    private TokenService: TokenService,
    private router:Router,
    
    private AuthService:AuthService

  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }


  onSubmit() {
   

    this.UserService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  handleError(httpError) {
    this.error = httpError.error.error;
  }

  handleResponse(data) {
    this.TokenService.handle(data.access_token);
    this.AuthService.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
}
