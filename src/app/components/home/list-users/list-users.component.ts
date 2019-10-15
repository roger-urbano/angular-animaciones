import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, state} from '@angular/animations';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
    animations: [
        trigger('starModal', [
            state('void', style({
                transform: 'translateY(200px)',
                opacity: 0,
                background: 'blue'
            })),
            transition(':enter', [
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                    transform: 'translateY(0)',
                    opacity: 1,
                    background: 'yellow'
                }))
            ]),
            transition(':leave',
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                    transform: 'translateY(-300px)',
                    opacity: 0,
                    background: 'blue'
                })))
        ])
    ]
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
