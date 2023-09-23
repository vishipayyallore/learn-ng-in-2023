import { Component, Host, Input, OnDestroy, OnInit, Optional } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { ProductViewService } from './product-view.service';

@Component({
  selector: 'sv-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit, OnDestroy {
  @Input() id = -1;

  name = '';

  private productSub = new Subject<void>();

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
    this.productviewService.getProduct(this.id).pipe(
      takeUntil(this.productSub)
    ).subscribe(product => {
      if (product) {
        this.name = product.name;
      }
    });
  }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }

}