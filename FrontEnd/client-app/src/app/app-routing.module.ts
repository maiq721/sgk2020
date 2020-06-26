import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: "client",
    loadChildren: () => import('./ui/management/management.module').then(m => m.ManagementModule)
  },{
    path: "login",
    loadChildren: () => import('./ui/login/login.module').then(m => m.LoginModule)
  }
  ,
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
