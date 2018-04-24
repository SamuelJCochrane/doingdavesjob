import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.scss']
})
export class DayColumnComponent implements OnInit {
  periods: string[] = ['11-12', '12-13', '13-14', '14-15'];
  constructor() { }

  ngOnInit() {
  }

}
