import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';


const routes: Routes = [{
  path: "",
  component: StudentComponent,
  children: [
    {
      path: "main",
      loadChildren: () =>
        import("./main/student-main.module").then(
          m => m.StudentMainModule
        )
    },{
      path: "mytask",
      loadChildren: () =>
        import("./mytask/mytask.module").then(
          m => m.MytaskModule
        )
    },{
      path: "subject/:subjectID",
      loadChildren: () =>
        import("./subject/subject.module").then(
          m => m.SubjectModule
        )
    },{ path: "", redirectTo: "main", pathMatch: "full" }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
