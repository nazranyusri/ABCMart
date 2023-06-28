import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  updateLoginStatus(status: boolean) {
    this.isLoggedIn = status;
    console.log(this.isLoggedIn);
  }

  updateRole(role: boolean) {
    this.isAdmin = role;
  }

  authenticateUser(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/authenticate`, {email, password});
  }
}
