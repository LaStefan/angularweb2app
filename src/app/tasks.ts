export class Task {
  constructor(
   public id: number,
   public department_id: number,
   public name: string,
   public employees: number[], // array of id of employees assigned to this task
   public due_date: string) { }
}
