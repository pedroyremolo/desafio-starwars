import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

import {Planet} from '../models/planet.model';
import {getRandomInteger} from '../helpers/random-integer.helper';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private count: number;
  private PLANET_ERROR: Planet = {
    name: 'Unreachable Planet: Try again',
    rotation_period: 0,
    orbital_period: 0,
    diameter: 0,
    climate: 'unknown',
    gravity: 'unknown',
    terrain: 'unknown',
    surface_water: 0,
    population: 0,
    residents: [],
    films: [],
    created: new Date(),
    edited: new Date(),
    url: 'unknown'
  };

  constructor(private http: HttpClient) {
  }

  getRandomPlanet(): Observable<Planet> {
    if (!this.count) {
      return this.http
        .get<any>(`${environment.apiHost}/planets/`)
        .pipe<Planet>(map((resp) => {
          this.count = resp.count;
          return resp.results[getRandomInteger(resp.results.length)];
        }));
    }

    return this.http
      .get<any>(`${environment.apiHost}/planets/${getRandomInteger(this.count)}`);
  }

  get planetError() {
    return this.PLANET_ERROR;
  }
}
