import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytaskRoutingModule } from './mytask-routing.module';
import { MytaskComponent } from './mytask.component';
import { ShareComponentModule } from 'src/app/shared/components/share-component/share-component.module';


@NgModule({
  declarations: [MytaskComponent],
  imports: [
    CommonModule,
    MytaskRoutingModule,
    ShareComponentModule
  ]
})
export class MytaskModule { }
