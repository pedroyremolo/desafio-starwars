import {Component, OnInit} from '@angular/core';
import {PlanetService} from '../tools/services/planet.service';

import {Planet} from '../tools/models/planet.model';

@Component({
  selector: 'dsw-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.sass']
})
export class CardSliderComponent implements OnInit {

  currentPlanet: Planet;
  isLoading = true;

  constructor(private planetService: PlanetService) {
  }

  ngOnInit() {
    this.nextPlanet();
  }

  nextPlanet() {
    this.isLoading = true;
    if (this.currentPlanet) { this.currentPlanet = null; }
    this.planetService.getRandomPlanet().subscribe((planet) => {
      this.currentPlanet = planet;
    });
    this.isLoading = !this.isLoading;
  }

}
