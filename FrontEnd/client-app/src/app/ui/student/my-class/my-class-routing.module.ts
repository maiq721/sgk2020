import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyClassComponent } from './my-class/my-class.component';


const routes: Routes = [{
  path: "",
  component: MyClassComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyClassRoutingModule { }
