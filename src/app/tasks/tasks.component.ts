import { Component, OnInit } from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    task : Task ={
        id: 1,
        name: 'Build website',
        departmentID: 1
    }
  constructor() { }

  ngOnInit() {
  }

}
