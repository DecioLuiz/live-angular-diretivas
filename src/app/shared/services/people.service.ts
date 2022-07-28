import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Décio',
        lastName: 'Luíz',
        age: 41
      },
      {
        firstName: 'Nanna',
        lastName: 'Forseti',
        age: 47
      },
      {
        firstName: 'Doro',
        lastName: 'Andrade',
        age: 4
      },
      {
        firstName: 'Lolinho',
        lastName: 'Jr',
        age: 2
      }

    ]

    return of(peopleArray);
  }
}
