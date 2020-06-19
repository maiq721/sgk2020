import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxPopupModule, DxTextBoxModule, DxValidatorModule, DxSelectBoxModule, DxNumberBoxModule } from 'devextreme-angular';
import { PopupSignUpComponent } from './popup-sign-up/popup-sign-up.component';
import { PopupAddUserComponent } from './popup-add-user/popup-add-user.component';



@NgModule({
  declarations: [PopupAddUserComponent, PopupSignUpComponent, PopupAddUserComponent],
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
  exports:[PopupAddUserComponent,PopupSignUpComponent, PopupAddUserComponent]
})
export class PopupModule { }
