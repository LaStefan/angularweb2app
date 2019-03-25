import { Component, OnInit } from '@angular/core';
import {Task} from '../tasks';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {TaskService} from '../task.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;
  searchTerm: string;
  constructor( private taskService: TaskService, private route: ActivatedRoute,
               private location: Location) { }

  ngOnInit() {
    this.getTasks();
  }
  onSelect(task: Task): void {
    this.selectedTask = task;
  }
  addTask(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.taskService.addTask({ name } as Task).subscribe(task => {
        this.tasks.push(task);
      });
  }
  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task).subscribe();
  }
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
  goBack(): void {
    this.location.back();
  }
  search(): void {
    const term = this.searchTerm;
    this.tasks = this.tasks.filter(function foo(tag) {
      return tag.name.indexOf(term) >= 0;
    });
  }
  }
