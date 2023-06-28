import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  addUser(user: any){
    return this.http.post(`${this.apiUrl}/add`, user);
  }

  updateUser(user: any){
    return this.http.patch(`${this.apiUrl}/update`, user);
  }

  deleteUser(userId: any){
    console.log("In service: " + userId);
    return this.http.delete(`${this.apiUrl}/delete/${userId}`);
  }
}
