import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from 'src/app/models/employees.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employees[]>{
    return this.http.get<Employees[]>(this.baseApiUrl + '/api/employees')
  }
  addEmployee(employee: Employees) {
    this.http.post(this.baseApiUrl, employee)
  }
}
