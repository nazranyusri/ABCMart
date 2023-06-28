import { Component,  OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interface/product';
// import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    
  ) {}

  ngOnInit() {
    this.getLowQuantity();
  }

  getLowQuantity() {
    this.productService.getLowQuantity().subscribe(
      (result: any) => {
        console.log(result);
        this.products = result.products;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
