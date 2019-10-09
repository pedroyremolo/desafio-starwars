import {Component, Input} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

import {Planet} from '../../tools/models/planet.model';

@Component({
  selector: 'dsw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'perspective(400px) translateZ(-4000px)'
        }),
        animate('1s ease-in', style({
          opacity: 1,
          transform: 'perspective(400px) translateZ(0)'
        }))
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'perspective(400px) translateZ(-4000px)'
        }))
      ])
    ])
  ]
})
export class CardComponent {

  @Input() content: Planet;

  constructor() {
  }
}
