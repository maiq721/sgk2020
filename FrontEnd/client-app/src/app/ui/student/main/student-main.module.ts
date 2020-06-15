import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentMainRoutingModule } from './student-main-routing.module';
import { StudentMainComponent } from './student-main.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { ShareComponentModule } from 'src/app/shared/components/share-component/share-component.module';


@NgModule({
  declarations: [StudentMainComponent],
  imports: [
    CommonModule,
    StudentMainRoutingModule,
    AngularResizedEventModule,
    ShareComponentModule
  ]
})
export class StudentMainModule { }
