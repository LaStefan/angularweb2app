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
  save(): void {
    this.taskService.updateTask(this.task)
      .subscribe(() => this.tasksComponent.goBack());
  }
}
