import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DxListModule, DxContextMenuModule } from 'devextreme-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareComponentModule } from 'src/app/shared/components/share-component/share-component.module';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    DxContextMenuModule,
    DxListModule,
    FontAwesomeModule,
    ShareComponentModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class ToolbarModule { }
