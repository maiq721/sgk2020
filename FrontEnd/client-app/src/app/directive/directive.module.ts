import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionDirective } from './under-construction.directive';



@NgModule({
  declarations: [UnderConstructionDirective],
  imports: [
    CommonModule
  ],
  exports:[UnderConstructionDirective]
})
export class DirectiveModule { }
