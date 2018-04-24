import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DayColumnComponent } from './timetable/day-column/day-column.component';
import { PersonComponent } from './people-nav/person/person.component';
import { TimeBlockComponent } from './timetable/day-column/time-block/time-block.component';
import { PeopleNavComponent } from './people-nav/people-nav.component';
import { TimetableComponent } from './timetable/timetable.component';
import { PeopleService } from './people-nav/people.service';

const appRoutes: Routes = [
  { path: 'timetable', component: TimetableComponent },
  { path: 'people', component: PeopleNavComponent, children: [
    { path: ':id', component: PersonComponent }
  ] }, 
];

@NgModule({
  declarations: [
    AppComponent,
    DayColumnComponent,
    PersonComponent,
    TimeBlockComponent,
    PeopleNavComponent,
    TimetableComponent,
  ],
  imports: [
    [
      RouterModule.forRoot(
        appRoutes,
        //{ enableTracing: true }
      )
    ],
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
