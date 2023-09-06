import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'sv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  products: ProductInterface[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}