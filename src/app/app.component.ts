import { Component } from '@angular/core';
import {Department} from "./department";
import {Employee} from "./employee";
import {Task} from "./task";

@Component({
  selector: 'app-root',
  template:
    `
<body>
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to week 2!
  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>

    <h1>{{title}}</h1>
             <!--   Department Component    -->
    <h2>Departments</h2>
    <p> Available departments:</p>
   <ol>
     <li *ngFor="let department of departments">
        {{department.name}}  <!-- displays the array of department names -->
    </li>
   </ol>
    
    <h2> Employees</h2>
    <p> List of current Employees</p>
    <ol>
        <li *ngFor="let employee of employees">
            {{employee.name}}
        </li>
    </ol>
    
    <h2> Tasks</h2>
    <p> List of Tasks:</p>
    <ol>
        <li *ngFor="let task of tasks">
            {{task.name}}
        </li>
    </ol>
   </body>
    `
      })
export class AppComponent {
  title = 'Our Angular App';
  //componentTitles =
  departments =
      [
          new Department(1, 'Software'),
          new Department(2 ,'Business'),
          new Department(3,'Technology')
      ];
  departmentList = this.departments[0];

    employees =
        [
            new Employee(1,'Lily Jones', 2),
            new Employee(2,'James Smith', 1),
            new Employee(3,'Ron Blane', 1),
            new Employee(4,'Tim Roland', 3)

        ];
    employeeList = this.employees[0];

    tasks =
        [
            new Task(1,'Build website', 1),
            new Task(2,'Make Documentations', 2),
            new Task(3,'Build Phone', 3),

        ];
    taskList = this.tasks[0];

}
