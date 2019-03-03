import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { UserService } from './Services/user.service';
import { TokenService } from './Services/Auth/token.service';
import { AuthService } from './Services/Auth/auth.service';
import { AfterLoginService } from './Services/Auth/after-login.service';
import { BeforeLoginService } from './Services/Auth/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { EmployeurComponent } from './components/employeur/employeur.component';
import { EmployeurService } from './Services/Employeur/employeur.service';
// the scanner!
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CommercantComponent } from './components/commercant/commercant.component';
import { PasswordManager } from './components/profile/profile.password.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    SidemenuComponent,
    EmployeurComponent,
    CommercantComponent,
    PasswordManager,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    ZXingScannerModule
  ],
  providers: [
      UserService,TokenService,AuthService,AfterLoginService,BeforeLoginService,
      { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
      SnotifyService,
      EmployeurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
