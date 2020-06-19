import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginMainComponent } from './login-main/login-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './signup/signup.component';
import { PopupModule } from 'src/app/popup/popup.module';


@NgModule({
  declarations: [LoginMainComponent, SignupComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
    PopupModule
  ]
})
export class LoginModule { }
