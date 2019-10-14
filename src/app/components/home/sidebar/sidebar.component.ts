import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

   @Input() public show: boolean;
   @Output() hideEvent = new EventEmitter();

  constructor() {
     // this.show = true;
  }

  ngOnInit() {
  }

  closeSidebar(status) {
     this.hideEvent.emit(status);
  }

}
