import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModaleComponent } from './modale/modale.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModaleComponent
  ],
  exports:[ModaleComponent]
})
export class SharedModule { }
