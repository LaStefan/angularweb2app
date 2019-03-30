import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../tasks';
import {TaskService} from '../task.service';
import {TasksComponent} from '../tasks/tasks.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  constructor(private taskService: TaskService, private tasksComponent: TasksComponent) { }

  ngOnInit() {
  }
  save(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.task.name = name;
    this.taskService.updateTask(this.task)
      .subscribe(() => this.tasksComponent.goBack());
  }
}

