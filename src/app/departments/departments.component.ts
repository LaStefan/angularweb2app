import { Component, OnInit } from '@angular/core';
import {Department} from '../department';

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
  constructor(private departmentService: DepartmentService, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getDepartments();
  }
  onSelect(department: Department): void {
    this.selectedDep = department;
  }
  addDepartment(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.departmentService.addDepartment({ name } as Department).subscribe(department => {
      this.departments.push(department);
    });
  }
  deleteDepartment(department: Department): void {
    this.departments = this.departments.filter(t => t !== department);
    this.departmentService.deleteDepartment(department).subscribe();
  }
  getDepartments(): void {
    this.departmentService.getDepartments()
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
