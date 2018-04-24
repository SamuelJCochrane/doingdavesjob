import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-block',
  templateUrl: './time-block.component.html',
  styleUrls: ['./time-block.component.scss']
})
export class TimeBlockComponent implements OnInit {
  numOfPeople: number = 0;
  inputMaxLength: number = 2;
  minWorkers: number = 0;
  maxWorkers: number = 100;

  constructor() { }

  ngOnInit() {
  }

  onIncrement() {
    if (this.numOfPeople < this.maxWorkers) {
      this.numOfPeople++;
    }
  }

  onDecrement() {
    if (this.numOfPeople > this.minWorkers) {
      this.numOfPeople--;
    }
  }

}
