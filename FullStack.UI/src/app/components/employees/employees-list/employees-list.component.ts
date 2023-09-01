import { Component } from '@angular/core';
import { Employees } from 'src/app/models/employees.model';
import { EmployeesService } from '../../services/employees.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent  {

  employees: Employees[] = [];
  constructor(private employeeService: EmployeesService) {}
  ngOnInit() {
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (response) => {
        this.employees = response;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
