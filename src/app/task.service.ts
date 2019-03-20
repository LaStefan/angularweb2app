import { Injectable } from '@angular/core';
import {Task} from './tasks';
import {TASKS} from './mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
tasks: Task[];
  constructor() {
  }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
  addTask(task: Task): void {
    this.tasks.push(task);
  }
  deleteTask(name): void {
    const key = 'name';
    for ( let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i][key] === name) {
        this.tasks.splice(i, 1);
      }

    }
  }
}
