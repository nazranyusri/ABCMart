import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:3000/product';

  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  getLowQuantity(){
    return this.http.get(`${this.apiUrl}/getLowQuantity`);
  }

  addProduct(product: any){
    return this.http.post(`${this.apiUrl}/add`, product);
  }

  updateProduct(product: any){
    return this.http.patch(`${this.apiUrl}/update`, product);
  }

  deleteProduct(productId: any){
    console.log("In service: " + productId);
    return this.http.delete(`${this.apiUrl}/delete/${productId}`);
  }
}
