import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TasksComponent } from './tasks/tasks.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TasksComponent,
    DepartmentsComponent,
    EmployeesComponent,
    DashboardComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
