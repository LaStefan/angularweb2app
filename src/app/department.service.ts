import { Injectable } from '@angular/core';
import {Department} from './department';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Task} from './tasks';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments: Department[];
  private departmentsUrl = 'http://i875395.hera.fhict.nl/api/396268/department';
  constructor( private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl).pipe(tap(_ => console.log('fetched departments')),
      catchError(this.handleError<Department[]>('getDepartment', []))
    );
  }
  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.departmentsUrl, department, httpOptions).pipe(
      tap((newDep: Department) => console.log(`added department w/ id=${newDep.id}`)),
      catchError(this.handleError<Department>('addDepartment'))
    );
  }
  deleteDepartment(department: Department): Observable<Department> {
    const id = typeof department === 'number' ? department : department.id;
    const url = `${this.departmentsUrl}/${id}`;

    return this.http.delete<Department>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted department id=${id}`)),
      catchError(this.handleError<Department>('deleteDepartment'))
    );
  }
  /** GET dep by id. Will 404 if id not found */
  getDepartment(id: number): Observable<Department> {
    const url = `${this.departmentsUrl}/${id}`;
    return this.http.get<Department>(url).pipe(
      tap(_ => console.log(`fetched department id=${id}`)),
      catchError(this.handleError<Department>(`getDepartment id=${id}`))
    );
  }
  updateDepartment(department: Department): Observable<any> {
    return this.http.put(this.departmentsUrl, department, httpOptions).pipe(
      tap(_ => console.log(`updated department id=${department.id}`)),
      catchError(this.handleError<any>('updateDepartment'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
