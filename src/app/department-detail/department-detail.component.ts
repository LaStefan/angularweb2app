import { Component, OnInit, Input } from '@angular/core';
import {Department} from '../department';


import {DepartmentService} from '../department.service';
import {DepartmentsComponent} from '../departments/departments.component';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
@Input() department: Department;
  constructor(private departmentService: DepartmentService, private depComponent: DepartmentsComponent) { }

  ngOnInit() {
  }
  save(): void {
    this.departmentService.updateDepartment(this.department)
      .subscribe(() => this.depComponent.goBack());
  }
}
