import { Component } from '@angular/core';
import {EMPLOYEES} from "./mock-employees";

@Component({
    selector: 'app-new-employees',
    template: `
    <input #newEmployee
      (keyup.enter)="addEmployee(newEmployee.value)"
      (blur)="addEmployee(newEmployee.value); newEmployee.value='' "
      placeholder="Department Name">


    <button (click)=" addEmployee(newEmployee.value) ">Add</button>

    <ul><li *ngFor="let employee of employees">{{employee}}</li></ul>
    
    
`
    })

    export class NewEmployeesComponent {
    employees = EMPLOYEES ;

        addEmployee(newEmployee: string) {
            if (newEmployee) {
               // this.employees.push(newEmployee);
            }
        }


    }
/*
newDepartment(newDepartmentId: number , newDepartmentName : string){
    let addDepartment= {newDepartmentId, newDepartmentName}
    if (newDepartmentName) {
        this.departments.push(this.addDepartment);
    }
  }
*/
