import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
updatedUser!: User;
errorMessage: string = '';

constructor(
  private userService: UserService,
  public dialogRef: MatDialogRef<UpdateUserComponent>,
  @Inject(MAT_DIALOG_DATA) public data: User
) {}

ngOnInit(): void {
  this.updatedUser = { ...this.data };

}

onCancelClick(): void {
  this.dialogRef.close();
}

onSaveClick(): void {
  if(this.isFormValid()){
    this.dialogRef.close();
    this.userService.updateUser(this.updatedUser).subscribe(
      (response: any) => {
        console.log(response);
        this.dialogRef.close(true);
      }
    );
  }
}

isFormValid(): boolean {
  if (
    !this.updatedUser.name ||
    !this.updatedUser.email ||
    !this.updatedUser.telno ||
    !this.updatedUser.address 

  ) {
    this.errorMessage = 'Please fill in all the fields.';
    return false;
    
  }
  return true;
}
}

