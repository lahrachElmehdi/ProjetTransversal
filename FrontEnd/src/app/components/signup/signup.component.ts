import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { TokenService } from 'src/app/Services/Auth/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    username: null,
    password: null,
    password_confirmation: null
  }

  public error = [];
  constructor(private UserService: UserService,
    private TokenService: TokenService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    this.UserService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleError(httpError) {
    this.error = httpError.error.errors;
  }

  handleResponse(data) {
    this.TokenService.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
}
