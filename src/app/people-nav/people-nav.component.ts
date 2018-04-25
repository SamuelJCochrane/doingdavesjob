import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-nav',
  templateUrl: './people-nav.component.html',
  styleUrls: ['./people-nav.component.scss']
})
export class PeopleNavComponent implements OnInit {
  people: object[];
  personSelected: object = {name: '', id: ''}
  constructor(private peopleService: PeopleService, private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

  changePerson(person) {
    this.personSelected = person;
  }
}
