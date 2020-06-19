import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';


const routes: Routes = [{
  path: "",
  component: ManagementComponent,
  children: [{
      path: "",
      loadChildren: () =>
        import("./../student/student.module").then(
          m => m.StudentModule
        )
    },{ path: "", redirectTo: "", pathMatch: "full" }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
