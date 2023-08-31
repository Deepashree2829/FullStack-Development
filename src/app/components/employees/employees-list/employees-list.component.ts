import { Component } from '@angular/core';
import { Employees } from 'src/app/models/employees.model';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent  {

  employees: Employees[] = [
    { id: "123" , name: "abc", email: "dbk2829@gmail.com", phone: 9875875854, salary: 30000},
    { id: "123" , name: "abc", email: "dbk2829@gmail.com", phone: 9875875854, salary: 30000},
    { id: "123" , name: "abc", email: "dbk2829@gmail.com", phone: 9875875854, salary: 30000}
  ];
  ngOnInit() {

  }
}
