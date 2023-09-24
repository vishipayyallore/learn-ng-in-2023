import { Injectable } from '@angular/core';
import { Observable, of, mergeMap } from 'rxjs';

import { ProductsService } from '../products.service'
import { ProductInterface } from '../product-interface';

// Service in a Service
@Injectable()
export class ProductViewService {

  private product: ProductInterface | undefined;

  constructor(private productService: ProductsService) { }

  // Method 1
  // getProduct(id: number): ProductInterface | undefined {
  //   const products = this.productService.getProducts();

  //   if (!this.product) {
  //     this.product = products[id];
  //   }

  //   return this.product;
  // }

  getProduct(id: number): Observable<ProductInterface> {
    return this.productService.getProducts().pipe(
      mergeMap(products => {
        if (!this.product) {
          this.product = products[id];
        }
        return of(this.product);
      })
    );
  }

}
