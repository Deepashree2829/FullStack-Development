import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from 'src/app/models/employees.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = 'https://localhost:7021';
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employees[]>{
    return this.http.get<Employees[]>(this.baseApiUrl + '/api/employees')
  }
  addEmployee(addEmployeeRequest: Employees): Observable<Employees> {
    addEmployeeRequest.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Employees>(this.baseApiUrl + '/api/employees', addEmployeeRequest)
  }
  getEmployeeById(id: string): Observable<Employees> {
    return this.http.get<Employees>(this.baseApiUrl + '/api/employees/' + id)
  }
  updateEmployeeById(id: string, updateEmployeeRequest: Employees): Observable<Employees> {
    return this.http.put<Employees>(this.baseApiUrl + '/api/employees/' + id, updateEmployeeRequest)
  }
  deleteEmployee(id: string): Observable<Employees> {
    return this.http.delete<Employees>(this.baseApiUrl + '/api/employees/' + id)
  }
}
