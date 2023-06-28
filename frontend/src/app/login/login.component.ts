import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    // this.authService.updateLoginStatus(true);
    this.authService.authenticateUser(this.email, this.password).subscribe(
      (res: any) => {
        this.authService.updateLoginStatus(true);
        if(res.user.role === 'admin'){
          this.authService.updateRole(true);
        }else{
          this.authService.updateRole(false);
        }
        this.router.navigate(['/home']);
      },
      (err: any) => {
        this.errorMessage = err.error.message;
      });    
  }  
}
