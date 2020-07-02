import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxPopupModule, DxTextBoxModule, DxValidatorModule, DxSelectBoxModule, DxNumberBoxModule } from 'devextreme-angular';
import { PopupSignUpComponent } from './popup-sign-up/popup-sign-up.component';
import { PopupAddUserComponent } from './popup-add-user/popup-add-user.component';
import { PopupViewLessonComponent } from './popup-view-lesson/popup-view-lesson.component';
import { ShareComponentModule } from '../shared/components/share-component/share-component.module';



@NgModule({
  declarations: [PopupAddUserComponent, PopupSignUpComponent, PopupAddUserComponent, PopupViewLessonComponent],
  imports: [
    CommonModule,
    DxPopupModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    DxSelectBoxModule
  ],
  exports:[PopupAddUserComponent,PopupSignUpComponent, PopupAddUserComponent,PopupViewLessonComponent]
})
export class PopupModule { }
