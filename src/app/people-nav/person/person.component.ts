import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person: object;
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

}
