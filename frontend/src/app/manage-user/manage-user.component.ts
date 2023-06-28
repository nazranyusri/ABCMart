import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interface/user';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  users: Array<User> = [];
  user: User = {
    name: '',
    email: '',
    password: '',
    telno: '',
    address: '',
    gender: '',
    role: '', 


};
  searchKey: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser().subscribe(
      (result: any) => {
        console.log(result);
        this.users = result.users;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addUser() {
    if (this.isFormValid()) {
      this.userService.addUser(this.user).subscribe((response: any) => {
        console.log(response);
        this.getAllUser();
        this.resetForm();
      });
    }
  }

  updateUser(user: User) {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '400px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
     if(result) {
      this.getAllUser();
     }
      
    });
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(
      (response: any) => {
        console.log(response);
        this.getAllUser();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  resetForm() {
    this.user = {
      name: '',
      email: '',
      password: '',
      telno: '',
      address: '',
      gender: '',
      role: '', 
    };
  }

  isFormValid() {
    if (
      this.user.name === '' ||
      this.user.email === '' ||
      this.user.password === '' ||
      this.user.telno === '' ||
      this.user.address === ''
    ) {
      this.errorMessage = 'Please fill in all the fields.';
      return false;
    }
    return true;
  }
}