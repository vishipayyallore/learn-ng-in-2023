import { Injectable } from '@angular/core';

import { ProductsService } from './products.service';
import { ProductInterface } from './product-interface';
import { ProductViewService } from './product-view/product-view.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends ProductsService {

  constructor(private productViewService: ProductViewService) {
    super();
  }
  override getProducts(): ProductInterface[] {
    return super.getProducts().slice(1, 3);
  }

}
