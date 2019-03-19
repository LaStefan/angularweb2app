import { Component, OnInit } from '@angular/core';
import {Department} from '../department';
import {DEPARTMENTS} from '../mock-departments';

import {DepartmentService} from '../department.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';




@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
departments: Department[];
selectedDep: Department;
searchTerm: string;
  constructor(private departmentService: DepartmentService,private route: ActivatedRoute,
              private location: Location) { }

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
  goBack(): void {
    this.location.back();
  }
  search(): void {
    const term = this.searchTerm;
    this.departments = this.departments.filter(function foo(tag) {
      return tag.name.indexOf(term) >= 0;
    });
  }
}
