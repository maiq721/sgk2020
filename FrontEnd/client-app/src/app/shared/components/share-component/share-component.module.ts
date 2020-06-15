import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridItemComponent } from './grid-item/grid-item.component';
import { GridLessonItemComponent } from './grid-lesson-item/grid-lesson-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [GridItemComponent, GridLessonItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[GridItemComponent,GridLessonItemComponent]
})
export class ShareComponentModule { }
