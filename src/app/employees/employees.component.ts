import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';

import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Task} from '../tasks';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
employees: Employee[];
selectedEmployee: Employee;
searchTerm: string;
  constructor( private employeeService: EmployeeService,
               private route: ActivatedRoute,
               private location: Location) { }

  ngOnInit() {
    this.getEmployees();
  }
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  deleteEmployee(employee: Employee): void {
    this.employees = this.employees.filter(t => t !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }
  addEmployee(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.employeeService.addEmployee({ name } as Employee).subscribe(employee => {
      this.employees.push(employee);
    });
  }
  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
  goBack(): void {
    this.location.back();
  }
  search(): void {
    const term = this.searchTerm;
    this.employees = this.employees.filter(function foo(tag) {
      return tag.name.indexOf(term) >= 0;
    });
  }
}
