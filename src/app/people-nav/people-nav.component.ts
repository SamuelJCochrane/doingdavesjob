import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people-nav',
  templateUrl: './people-nav.component.html',
  styleUrls: ['./people-nav.component.scss']
})
export class PeopleNavComponent implements OnInit {
  people: object[];
  constructor(private peopleService: PeopleService) { }
  

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

}
