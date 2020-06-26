import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridItemComponent } from './grid-item/grid-item.component';
import { GridLessonItemComponent } from './grid-lesson-item/grid-lesson-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { DxListModule, DxContextMenuModule } from 'devextreme-angular';



@NgModule({
  declarations: [GridItemComponent, GridLessonItemComponent, UserPanelComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DxListModule,
    DxContextMenuModule
  ],
  exports:[GridItemComponent,GridLessonItemComponent,UserPanelComponent]
})
export class ShareComponentModule { }
