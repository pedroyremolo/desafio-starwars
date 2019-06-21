import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../tools/services/planet.service';

import { Planet } from '../tools/models/planet.model';

@Component({
  selector: 'dsw-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.sass']
})
export class CardSliderComponent implements OnInit {

  planetList: Planet[];

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.getPlanetList().subscribe((planetList) => {
      this.planetList = planetList;
      console.log(this.planetList);
    });
  }

}
