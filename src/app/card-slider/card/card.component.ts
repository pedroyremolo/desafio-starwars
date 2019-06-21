import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../../tools/models/planet.model';

@Component({
  selector: 'dsw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() content: Planet;

  constructor() {
  }

  ngOnInit() {
  }

}
