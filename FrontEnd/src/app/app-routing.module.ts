import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

import { BeforeLoginService } from './Services/Auth/before-login.service';
import { AfterLoginService } from './Services/Auth/after-login.service';
import { EmployeurComponent } from './components/employeur/employeur.component';
import { CommercantComponent } from './components/commercant/commercant.component';

const appRoutes: Routes = [

  {
    path: 'employeur',
    component: EmployeurComponent,
    canActivate:[AfterLoginService],
  },
  {
    path: 'commercant',
    component: CommercantComponent,
    canActivate:[AfterLoginService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AfterLoginService],
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate:[BeforeLoginService],
  },
  {
    path: 'response-password-reset ',
    component: ResponseResetComponent,
    canActivate:[BeforeLoginService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[BeforeLoginService],
  },
  {
    path: 'signup',
    component: SignupComponent,
     canActivate:[BeforeLoginService],
  },
]
@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
