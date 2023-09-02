import { Component } from '@angular/core';
import { Employees } from 'src/app/models/employees.model';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  addEmployeeRequest: Employees = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  constructor(private employeeService: EmployeesService, private router: Router) {

  }
  ngOninit() {}
  addEmployee() {
    console.log(this.addEmployeeRequest);
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe((response) => {
      this.router.navigate(['employees']);
    })
  }
}
