import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})

export class ModalFormComponent implements OnInit {
  @Input() public isModalForm: boolean;
  @Output() public close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal($event: boolean) {
    this.close.emit($event);
  }

}
