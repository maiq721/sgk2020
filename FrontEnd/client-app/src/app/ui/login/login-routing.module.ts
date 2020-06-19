import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [{
  path: "",
  component: LoginMainComponent
},{
  path: "signup",
  component: SignupComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
