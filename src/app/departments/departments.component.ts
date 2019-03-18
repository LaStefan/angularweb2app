import { Component, OnInit } from '@angular/core';
import {Department} from '../department';
import {DEPARTMENTS} from '../mock-departments';

import {DepartmentService} from '../department.service';




@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
departments: Department[];
selectedDep: Department;
  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }
  onSelect(department: Department): void {
    this.selectedDep = department;
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
  getDepartments(): void {
    this.departmentService.getDepartment()
      .subscribe(departments => this.departments = departments);
  }
}
