import { Component } from '@angular/core';
import {DEPARTMENTS} from "./mock-departments";

@Component({
    selector: 'app-new-departments',
    template: `
    <input #newDepartment
      (keyup.enter)="addDepartment(newDepartment.value)"
      (blur)="addDepartment(newDepartment.value); newDepartment.value='' "
      placeholder="Department Name">


    <button (click)=" addDepartment(newDepartment.value) ">Add</button>

    <ul><li *ngFor="let department of departments">{{department}}</li></ul>
    
    
`
})

export class NewDepartmentsComponent {
    departments = DEPARTMENTS ;
    constructor() {};


    addDepartment(newDepartment: string) {
        if (newDepartment) {
           // this.departments.push(newDepartment);
        }
    }


}

