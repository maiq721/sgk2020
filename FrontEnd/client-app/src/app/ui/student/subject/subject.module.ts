import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareComponentModule } from 'src/app/shared/components/share-component/share-component.module';


@NgModule({
  declarations: [SubjectDetailComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FontAwesomeModule,
    ShareComponentModule
  ],
  exports:[SubjectDetailComponent]
})
export class SubjectModule { }
