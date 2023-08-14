import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductInterface } from '../product-interface';

@Component({
    selector: 'sv-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements AfterViewInit {
    selectedProduct: ProductInterface | undefined;

    products: ProductInterface[] = [
        {
            name: 'Webcam',
            price: 100,
        },
        {
            name: 'Microphone',
            price: 200,
        },
        {
            name: 'Wireless keyboard',
            price: 85,
        },
    ];

    @ViewChild(ProductDetailComponent) productDetail:
        | ProductDetailComponent
        | undefined;

    ngAfterViewInit(): void {
        if (this.productDetail) {
            console.log(this.productDetail.product);
        }
    }
    onBuy() {
        window.alert('You just bought ${this.selectedProduct?.name}!');
    }

    trackByProducts(index: number, name: string): string {
        return name;
    }
}
