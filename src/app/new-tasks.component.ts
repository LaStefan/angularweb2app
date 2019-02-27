import { Component } from '@angular/core';
import {TASKS} from "./mock-tasks";

@Component({
    selector: 'app-new-tasks',
    template: `
    <input #newTask
      (keyup.enter)="addTask(newTask.value)"
      (blur)="addTask(newTask.value); newTask.value='' "
      placeholder="Task Name">


    <button (click)=" addTask(newTask.value) ">Add</button>

    <ul><li *ngFor="let task of tasks">{{task}}</li></ul>
    
    
`
})

export class NewTasksComponent {
    tasks = TASKS ;

    addTask(newTask: string) {
        if (newTask) {
           // this.tasks.push(newTask);
        }
    }


}
