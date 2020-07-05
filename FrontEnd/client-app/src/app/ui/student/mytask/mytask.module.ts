import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytaskRoutingModule } from './mytask-routing.module';
import { ShareComponentModule } from 'src/app/shared/components/share-component/share-component.module';
import { MytaskComponent } from './mytask.component';


@NgModule({
  declarations: [MytaskComponent],
  imports: [
    CommonModule,
    MytaskRoutingModule,
    ShareComponentModule
  ],
  exports:[MytaskComponent]
})
export class MytaskModule { }
