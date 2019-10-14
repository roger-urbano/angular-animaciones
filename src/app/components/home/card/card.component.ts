import {Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

   @Output() showEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showSidebar(status) {
     this.showEvent.emit(status);
     console.log(status);
  }

}
