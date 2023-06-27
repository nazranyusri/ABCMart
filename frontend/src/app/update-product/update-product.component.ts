import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../interface/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  updatedProduct!: Product;
  errorMessage: string = '';

  constructor(
    private productService: ProductService,
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  ngOnInit(): void {
    this.updatedProduct = { ...this.data };
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if(this.isFormValid()){
      this.dialogRef.close();
      this.productService.updateProduct(this.updatedProduct).subscribe(
        (response: any) => {
          console.log(response);
          this.dialogRef.close(true);
        }
      );
    }
  }

  isFormValid(): boolean {
    if (
      !this.updatedProduct.prodCode ||
      !this.updatedProduct.prodName ||
      this.updatedProduct.quantity == 0 ||
      this.updatedProduct.price == 0
    ) {
      this.errorMessage = 'Please fill in all the fields.';
      return false;
    }
    return true;
  }
}
