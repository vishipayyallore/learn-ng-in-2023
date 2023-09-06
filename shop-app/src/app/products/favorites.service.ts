import { Injectable } from '@angular/core';

import { ProductsService } from './products.service';
import { ProductInterface } from './product-interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends ProductsService {

  constructor() {
    super();
  }
  override getProducts(): ProductInterface[] {
    return super.getProducts().slice(1, 3);
  }

}
