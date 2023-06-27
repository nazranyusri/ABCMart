import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interface/product';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-stock',
  templateUrl: './manage-stock.component.html',
  styleUrls: ['./manage-stock.component.css'],
})
export class ManageStockComponent implements OnInit {
  products: Array<Product> = [];
  product: Product = {
    prodCode: '',
    prodName: '',
    quantity: 0,
    price: 0,
    dateAdd: new Date(),
  };
  searchKey: string = '';
  errorMessage: string = '';

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(
      (result: any) => {
        console.log(result);
        this.products = result.products;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addProduct() {
    if (this.isFormValid()) {
      this.productService.addProduct(this.product).subscribe((response: any) => {
        console.log(response);
        this.getAllProduct();
        this.resetForm();
      });
    }
  }
  
  updateProduct(product: Product) {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      width: '400px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllProduct();
      }
    });
  }
  
  isFormValid(): boolean {
    if (
      !this.product.prodCode ||
      !this.product.prodName ||
      this.product.quantity == 0 ||
      this.product.price == 0
    ) {
      this.errorMessage = 'Please fill in all the fields.';
      return false;
    }
    return true;
  }
  

  deleteProduct(product: Product) {
    console.log("In component: " + product);
    this.productService.deleteProduct(product.id).subscribe((response: any) => {
      console.log(response);
      this.getAllProduct();
    });
  }

  resetForm() {
    this.product.prodCode = '';
    this.product.prodName = '';
    this.product.quantity = 0;
    this.product.price = 0;
    this.product.dateAdd = new Date();
    this.errorMessage = '';
  }
}