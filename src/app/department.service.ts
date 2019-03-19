import { Injectable } from '@angular/core';
import {Department} from './department';
import {DEPARTMENTS} from './mock-departments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments: Department[];
  constructor() { }
  getDepartment(): Observable<Department[]> {
    return of(DEPARTMENTS);
  }
  deleteDepartment(name): void {
    const key = 'name';
    for ( let i = 0; i < this.departments.length; i++) {
      if (this.departments[i][key] === name) {
        this.departments.splice(i, 1);
      }

    }
  }
  addDepartment(department: Department) {
    this.departments.push(department);
  }
}
