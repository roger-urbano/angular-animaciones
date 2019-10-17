import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {trigger, style, transition, animate, state} from '@angular/animations';

@Component({
  selector: 'modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss'],

    animations: [
        trigger('animationModal', [
            state('void', style({
                transform: 'translateY(100px)',
            })),
            transition(':enter', [
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                    transform: 'translateY(0)',
                }))
            ]),
            transition(':leave',
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                    transform: 'translateY(-100px)',
                })))
        ])
    ]
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
