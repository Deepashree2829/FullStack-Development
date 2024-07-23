import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl: string = 'https://localhost:7021';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.baseApiUrl + '/api/employees')
  }
  addUser(addEmployeeRequest: Users): Observable<Users> {
    addEmployeeRequest.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Users>(this.baseApiUrl + '/api/employees', addEmployeeRequest)
  }
  getEmployeeById(id: string): Observable<Users> {
    return this.http.get<Users>(this.baseApiUrl + '/api/employees/' + id)
  }
  updateEmployeeById(id: string, updateEmployeeRequest: Users): Observable<Users> {
    return this.http.put<Users>(this.baseApiUrl + '/api/employees/' + id, updateEmployeeRequest)
  }
  deleteEmployee(id: string): Observable<Users> {
    return this.http.delete<Users>(this.baseApiUrl + '/api/employees/' + id)
  }
}
