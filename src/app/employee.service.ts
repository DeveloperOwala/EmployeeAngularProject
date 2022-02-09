import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }
  //fetch list of all employees
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.apiServerUrl}/all`);
  }
      //add employee
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.apiServerUrl}/add`, employee);
  }
  // get employee by id
  public getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.apiServerUrl}/${id}`);
  }
  //update employee
  public updateEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.apiServerUrl}/update/`, employee);
  }
  // delete employee by id
  public deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete<Object>(`${this.apiServerUrl}/delete/${id}`);
  }

}
