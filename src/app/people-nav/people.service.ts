import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PeopleService {
  currentPerson: Subject<object> = new Subject();

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
    
    getPerson(id) {
      this.getPeople().forEach((elem) => {
        console.log(elem)
      })
    }
}
