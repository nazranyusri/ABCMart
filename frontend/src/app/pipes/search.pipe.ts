import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], searchKey: string): Product[] {
    if (!products || !searchKey) {
      return products;
    }

    searchKey = searchKey.toLowerCase();

    return products.filter((product: Product) => {
      return (
        product.prodCode.toLowerCase().includes(searchKey) ||
        product.prodName.toLowerCase().includes(searchKey)
      );
    });
  }
}
