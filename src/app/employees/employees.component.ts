import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';

import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


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
    this.getEmployee();
  }
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  deleteEmployee(name): void {
    const key = 'name';
    for ( let i = 0; i < this.employees.length; i++) {
      if (this.employees[i][key] === name) {
        this.employees.splice(i, 1);
      }

    }
  }
  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
  getEmployee(): void {
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
