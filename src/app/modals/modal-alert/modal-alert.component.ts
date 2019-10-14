import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit {
    @Input() public isOpenModal: boolean;
    @Output() public close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
      this.isOpenModal = false;
  }

  closeModal($event: boolean) {
    this.close.emit($event);
  }

  sendFormModal($event:boolean) {
      this.close.emit($event);
      console.log("Enviar info y cerrar Modal");

  }

}
