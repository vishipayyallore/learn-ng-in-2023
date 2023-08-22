import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductInterface } from '../product-interface';
import { ProductsService } from '../products.service';

@Component({
    selector: 'sv-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    providers: [ProductsService],
})
export class ProductListComponent implements OnInit, AfterViewInit {
    selectedProduct: ProductInterface | undefined;
    @ViewChild(ProductDetailComponent)
    productDetail: ProductDetailComponent | undefined;
    products: ProductInterface[] = [];
    // private productService: ProductsService;

    constructor(private productService: ProductsService) {
        // this.productService = new ProductsService();
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

    ngAfterViewInit(): void {
        if (this.productDetail) {
            console.log(this.productDetail.product);
        }
    }

    onBuy() {
        window.alert(`You just bought ${this.selectedProduct?.name}!`);
    }

    trackByProducts(index: number, name: string): string {
        return name;
    }
}
