import { Component } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: Users[] = [];
  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.userService.getAllUsers()
    .subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
