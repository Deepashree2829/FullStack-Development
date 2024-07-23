import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userDetails: Users = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  constructor(private activeRoute: ActivatedRoute, private userService: UsersService, private router: Router) {}
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe({
      next: (paramas) => {
        const id = paramas.get('id');

        if(id) {
          this.userService.getEmployeeById(id)
          .subscribe({
            next: (response) => {
              this.userDetails = response;
            }
          })
        }
      }
    })
  }
  updateEmployee() {
        this.userService.updateEmployeeById(this.userDetails.id, this.userDetails).subscribe({
          next: (response) => {
            this.router.navigate(['users']);
          }
        })
  }
  deleteEmployee(id: string) {
    this.userService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['users']);
      }
    })
  }
}
