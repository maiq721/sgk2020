import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DxListModule, DxContextMenuModule } from 'devextreme-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    DxContextMenuModule,
    DxListModule,
    FontAwesomeModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class ToolbarModule { }
