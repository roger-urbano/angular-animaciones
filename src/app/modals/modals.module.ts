import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { ModalDefaultComponent } from './modal-default/modal-default.component';
import { ModalFormComponent } from './modal-form/modal-form.component';



@NgModule({
  declarations: [
      ModalDefaultComponent,
      ModalAlertComponent,
      ModalFormComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalDefaultComponent,
    ModalAlertComponent,
    ModalFormComponent
  ],
})
export class ModalsModule { }
