import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  count: number;

  constructor(private http: HttpClient) { }

  getPlanetList(page?: number): Observable<Planet[]> {
    if (page) {
      return this.http
        .get<any>(`https://swapi.co/api/planets/${page}`)
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
}
