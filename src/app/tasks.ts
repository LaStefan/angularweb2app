export class Task {
  constructor(
    public id: number,
    public name: string,
    public department: number,
    public employee: number[],
    public time: any) { }
}
