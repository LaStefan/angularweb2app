import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../tasks';
import {DepartmentService} from '../department.service';
import {Department} from '../department';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 tasks: Task[];
 departments: Department[];
 employees: Employee[];

   constructor(private taskService: TaskService, private depService: DepartmentService, private empService: EmployeeService) { }

  ngOnInit(){
this.getTasks();
this.getDepartments();
this.getEmployee();
  }
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  getEmployee(): void {
    this.empService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  getDepartments(): void {
    this.depService.getDepartment()
      .subscribe(departments => this.departments = departments);
  }
}
