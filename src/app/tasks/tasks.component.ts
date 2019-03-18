import { Component, OnInit } from '@angular/core';
import {Task} from '../tasks';


import {TaskService} from '../task.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;

  constructor( private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
  onSelect(task: Task): void {
    this.selectedTask = task;
  }
  deleteTask(name): void {
  const key = 'name';
  for ( let i = 0; i < this.tasks.length; i++) {
       if (this.tasks[i][key] === name) {
         this.tasks.splice(i, 1);
       }

    }
  }
    addTask(task: Task) {
    this.tasks.push(task);
    }
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}
