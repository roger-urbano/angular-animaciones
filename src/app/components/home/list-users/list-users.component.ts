import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, state, group, query, animateChild, stagger} from '@angular/animations';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
    animations: [
        trigger('parentAnimation', [
            state('void', style({
                // transform: 'translateY(100px)',
                opacity: 0
            })),
            transition(':enter', [
                group([
                    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                        // transform: 'translateY(0)',
                        opacity: 1
                    })),
                    query('@childAnimation', stagger(100, [
                        animateChild()
                    ]), { optional: true })
                ]),
            ]),
            transition(':leave', [
                group([
                    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                        // transform: 'translateY(-100px)',
                        opacity: 0
                    })),
                    query('@childAnimation', [
                        animateChild()
                    ], { optional: true })
                ]),
            ]),

        ]),
        trigger('childAnimation', [
            state('void', style({
                transform: 'translateY(100px)',
                opacity: 0
            })),
            transition(':enter', [
                animate(500, style({
                    opacity: 1,
                    transform: 'translateY(0)'
                }))
            ]),
            transition(':leave', [
                animate(500, style({
                    opacity: 0,
                    transform: 'translateY(100px)'
                }))
            ])
        ]),

        trigger('filterAnimation', [
            transition(':enter, * => 0, * => -1', []),
            transition(':increment', [
                query(':enter', [
                    style({ opacity: 0, width: '0px' }),
                    stagger(50, [
                        animate('300ms ease-out', style({ opacity: 1, width: '*' })),
                    ]),
                ], { optional: true })
            ]),
            transition(':decrement', [
                query(':leave', [
                    stagger(50, [
                        animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
                    ]),
                ])
            ]),
        ]),
    ]
})

export class ListUsersComponent implements OnInit {

  public isOpenModal: boolean;
  public exp: boolean;

  constructor() { }

  ngOnInit() {
      this.exp = false;
      console.log(this.exp);
  }

  openModal() {
      this.isOpenModal = true;
      console.log("abrir modal");
      console.log(this.isOpenModal);
  }

   closeModal($event: boolean) {
       this.isOpenModal = $event;
   }

    changeColor() {
      this.exp = !this.exp;
      console.log(this.exp);
    }

}
