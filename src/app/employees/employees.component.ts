import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';

import {EmployeeService} from '../employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
employees: Employee[];
selectedEmployee: Employee;
  constructor( private employeeService: EmployeeService) { }

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
}
