import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DashboardComponent} from './dashboard/dashboard.component';
import {TasksComponent} from './tasks/tasks.component';
import {DepartmentsComponent} from './departments/departments.component';
import {EmployeesComponent} from './employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
