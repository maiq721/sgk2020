import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyClassRoutingModule } from './my-class-routing.module';
import { MyClassComponent } from './my-class/my-class.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxDataGridModule } from 'devextreme-angular';
import { MyClassStaticComponent } from './my-class/my-class-static/my-class-static.component';
import { MyClassStudentComponent } from './my-class/my-class-student/my-class-student.component';
import { PopupModule } from 'src/app/popup/popup.module';


@NgModule({
  declarations: [MyClassComponent, MyClassStaticComponent, MyClassStudentComponent],
  imports: [
    CommonModule,
    MyClassRoutingModule,
    FontAwesomeModule,
    DxDataGridModule,
    PopupModule
  ]
})
export class MyClassModule { }
