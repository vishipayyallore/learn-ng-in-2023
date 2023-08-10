import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
    selector: 'sv-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements AfterViewInit {
    // selectedProduct = '';
    selectedProduct = 'Microphone';

    @ViewChild(ProductDetailComponent) productDetail:
        | ProductDetailComponent
        | undefined;

    onBuy(name: string) {
        window.alert(`You just bought ${name}!`);
    }

    ngAfterViewInit(): void {
        if (this.productDetail) {
            console.log(this.productDetail.name);
        }
    }
}
