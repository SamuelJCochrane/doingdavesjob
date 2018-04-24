import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  constructor() { }

  people: object[] = [
    {
      name: 'Dave',
      id: 1
    }, 
    {
      name: 'Steve',
      id: 2
    }, 
    {
      name: 'Sam',
      id: 3
    }, 
    {
      name: 'Shannon',
      id: 4
    }, 
    {
      name: 'Ben',
      id: 5
    }]

    getPeople() {
      return this.people.slice();
    }
}
