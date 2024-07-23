import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUsersRequest: Users = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  constructor(private userService: UsersService, private router: Router) {

  }
  ngOninit() {}
  addUser() {
    console.log(this.addUsersRequest);
    this.userService.addUser(this.addUsersRequest).subscribe((response) => {
      this.router.navigate(['users']);
    })
  }
}
