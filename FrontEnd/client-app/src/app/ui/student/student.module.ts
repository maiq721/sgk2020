import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentMainModule } from './main/student-main.module';
import { MyClassModule } from './my-class/my-class.module';
import { MytaskModule } from './mytask/mytask.module';
import { SubjectModule } from './subject/subject.module';


@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    StudentMainModule,
    MyClassModule,
    MytaskModule,
    SubjectModule
  ]
})
export class StudentModule { }
