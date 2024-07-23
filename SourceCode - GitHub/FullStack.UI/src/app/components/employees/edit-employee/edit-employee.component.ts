import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/models/employees.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails: Employees = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  constructor(private activeRoute: ActivatedRoute, private employeeService: EmployeesService, private router: Router) {}
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe({
      next: (paramas) => {
        const id = paramas.get('id');

        if(id) {
          this.employeeService.getEmployeeById(id)
          .subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          })
        }
      }
    })
  }
  updateEmployee() {
        this.employeeService.updateEmployeeById(this.employeeDetails.id, this.employeeDetails).subscribe({
          next: (response) => {
            this.router.navigate(['employees']);
          }
        })
  }
  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }
}
