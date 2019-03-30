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
    this.getEmployees();
  }
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  deleteEmployee(employee: Employee): void {
    this.employees = this.employees.filter(t => t !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }
  addEmployee(first_name: string, last_name: string, department_id: number): void {
    first_name = first_name.trim();
    last_name = last_name.trim();
    if (!first_name) { return; }
    if (!last_name) { return; }
    this.employeeService.addEmployee({first_name, last_name, department_id } as Employee).subscribe(employee => {
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
      return tag.first_name.indexOf(term) >= 0;
    });
  }
}
