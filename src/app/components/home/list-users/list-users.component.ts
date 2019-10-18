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
                    query('@childAnimation', stagger(200, [
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
    ]
})

export class ListUsersComponent implements OnInit {

  public exp: boolean;
  public isModalAlert: boolean;
  public isModalForm: boolean;


  constructor() { }

  ngOnInit() {
      this.exp = false;
      this.isModalAlert = false;
      this.isModalForm = false;
  }

  openModaAlertl() {
      this.isModalAlert = true;
  }

   openModaForm() {
        this.isModalForm = true;
   }

   closeModal($event: boolean) {
       this.isModalAlert = $event;
       this.isModalForm = $event;
   }

    animationList() {
      this.exp = !this.exp;
      console.log(this.exp);
    }

}
