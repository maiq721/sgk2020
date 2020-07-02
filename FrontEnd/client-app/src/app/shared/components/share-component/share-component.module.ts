import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridItemComponent } from './grid-item/grid-item.component';
import { GridLessonItemComponent } from './grid-lesson-item/grid-lesson-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { DxListModule, DxContextMenuModule } from 'devextreme-angular';
import { LessonOverviewComponent } from './lesson-overview/lesson-overview.component';
import { PopupModule } from 'src/app/popup/popup.module';



@NgModule({
  declarations: [GridItemComponent, GridLessonItemComponent, UserPanelComponent, LessonOverviewComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DxListModule,
    DxContextMenuModule,
    PopupModule
  ],
  exports:[GridItemComponent,GridLessonItemComponent,UserPanelComponent, LessonOverviewComponent]
})
export class ShareComponentModule { }
