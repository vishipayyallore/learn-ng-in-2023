import { Component, Host, Input, OnInit, Optional } from '@angular/core';

import { ProductViewService } from './product-view.service';

@Component({
  selector: 'sv-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {
  @Input() id = -1;

  name = '';

  constructor(@Host() @Optional() private productviewService: ProductViewService) { }

  ngOnInit(): void {

    // Method 1
    // const product = this.productviewService.getProduct(this.id);
    // if (product) {
    //   this.name = product.name;
    // }

    this.getProduct();
  }

  private getProduct() {
    this.productviewService.getProduct(this.id).subscribe(product => {
      if (product) {
        this.name = product.name;
      }
    });
  }

}