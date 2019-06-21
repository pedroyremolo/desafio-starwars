import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Planet} from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  count: number;

  constructor(private http: HttpClient) {
  }

  getPlanetList(page?: number): Observable<Planet[]> {
    if (page) {
      return this.http
        .get<any>(`https://swapi.co/api/planets/?page=${page}`)
        .pipe(map((resp) => {
          this.count = resp.count;
          return resp.results as Planet[];
        }));
    }

    return this.http
      .get<any>('https://swapi.co/api/planets/')
      .pipe(map((resp) => {
        this.count = resp.count;
        return resp.results as Planet[];
      }));
  }

  getRandomPlanet(): Observable<Planet> {
    if (!this.count) {
      return this.http
        .get<any>('https://swapi.co/api/planets/')
        .pipe<Planet>(map((resp) => {
          this.count = resp.count;
          return resp.results[Math.floor(Math.random() * (resp.results.length + 1))];
        }));
    }
    const randomPlanetNumber = Math.floor(Math.random() * (this.count + 1));

    return this.http
      .get<any>(`https://swapi.co/api/planets/${randomPlanetNumber}`);
  }
}
