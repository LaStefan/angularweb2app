import { Component, OnInit } from '@angular/core';
import {Department} from '../department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  department : Department ={
    id: 1,
      name: 'Software'
  }
  constructor() { }

  ngOnInit() {
  }

}
