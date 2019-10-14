import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { ModalDefaultComponent } from './modal-default/modal-default.component';



@NgModule({
  declarations: [
      ModalDefaultComponent,
      ModalAlertComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalDefaultComponent,
    ModalAlertComponent
  ],
})
export class ModalsModule { }
