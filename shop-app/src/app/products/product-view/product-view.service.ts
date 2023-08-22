import { Injectable } from '@angular/core';

import { ProductsService } from '../products.service'
import { ProductInterface } from '../product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  private product: ProductInterface | undefined;

  constructor(private productService: ProductsService) { }

  getProduct(id: number): ProductInterface | undefined {
    const products = this.productService.getProducts();

    if (!this.product) {
      this.product = products[id];
    }

    return this.product;
  }

}
