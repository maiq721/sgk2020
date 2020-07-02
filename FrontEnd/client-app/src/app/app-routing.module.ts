import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ManagementComponent } from './ui/management/management.component';
import { LoginMainComponent } from './ui/login/login-main/login-main.component';

const routes: Routes = [
  {
    path: 'elearning',
    children: [
      {
        path: "client",
        loadChildren: () =>
        import("./ui/management/management.module").then(
          m => m.ManagementModule
        )
      }, {
        path: "login",
        loadChildren: () =>
        import("./ui/login/login.module").then(
          m => m.LoginModule
        )
      }]
  }
  ,
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
