import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public isOpenModal: boolean;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
      this.isOpenModal = true;
      console.log("abrir modal");
      console.log(this.isOpenModal);
  }

   closeModal($event: boolean) {
      this.isOpenModal = $event;

   }

}
