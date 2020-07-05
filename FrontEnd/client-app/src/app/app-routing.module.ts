import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [
  {
    path: 'elearning',
    children: [
      {
        path: "client",
        loadChildren: () =>
        import("./ui/management/management.module").then(
          m => m.ManagementModule
        ),
        canActivate: [AuthGuardService]
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
