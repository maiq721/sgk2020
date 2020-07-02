import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { StudentModule } from '../student/student.module';


@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ToolbarModule,
    StudentModule
  ],
})
export class ManagementModule { }
