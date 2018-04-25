import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-people-nav',
  templateUrl: './people-nav.component.html',
  styleUrls: ['./people-nav.component.scss']
})
export class PeopleNavComponent implements OnInit {
  personSelected: object = {name: '', id: ''}
  id;
  
  totalHours: number;
  totalHoursMaxLength = 2;

  people = [
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


  timesAvailable = {
    monday: {
      "11:00": false,
      "12:00": false,
      "13:00": false,
      "14:00": false,
      "15:00": false,
      "16:00": false,
      "17:00": false,
      "18:00": false,
      "19:00": false,
      "20:00": false,
      "21:00": false,
      "22:00": false,
      "23:00": false,
    }
  }
  constructor(private peopleService: PeopleService, private route: ActivatedRoute) { }
  
  
  ngOnInit() {
    //this.people = this.peopleService.getPeople();
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.people.forEach((elem) => {
            if (elem.id == this.id) {
              this.personSelected = elem;
            }
          })
        }
      );
  }

  usefulFunc() {
    this.timesAvailable.monday["11:00"] = true;
  }
}
