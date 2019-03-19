import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {EMPLOYEES} from './mock-employees';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[];
  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
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
}
