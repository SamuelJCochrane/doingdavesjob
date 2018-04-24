import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-nav',
  templateUrl: './people-nav.component.html',
  styleUrls: ['./people-nav.component.scss']
})
export class PeopleNavComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
