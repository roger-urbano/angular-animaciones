import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {trigger, style, transition, animate, state} from '@angular/animations';

@Component({
  selector: 'modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss'],
})

export class ModalAlertComponent implements OnInit {
    @Input() public isModalAlert: boolean;
    @Output() public close  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal($event: boolean) {
    this.close.emit($event);
  }

}
