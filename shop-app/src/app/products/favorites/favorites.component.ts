import { Component, OnInit } from '@angular/core';

import { ProductInterface } from '../product-interface';
import { ProductsService } from '../products.service';
// import { FavoritesService } from '../favorites.service';
import { favoritesFactory } from '../favorites';
import { ProductViewService } from '../product-view/product-view.service';

@Component({
  selector: 'sv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [
    { provide: ProductsService, useFactory: favoritesFactory(true), deps: [ProductViewService] }
  ],
  // providers: [
  //   { provide: ProductsService, useClass: FavoritesService }
  // ]
})
export class FavoritesComponent implements OnInit {
  products: ProductInterface[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
  }
}