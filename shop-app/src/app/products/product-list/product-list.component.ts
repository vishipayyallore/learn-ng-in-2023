import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductInterface } from '../product-interface';
import { ProductsService } from '../products.service';

@Component({
    selector: 'sv-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    // providers: [ProductsService],
    viewProviders: [ProductsService], // This is the correct way to provide a service to a component and its children
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
        // Method 1
        // this.products = this.productService.getProducts();

        this.getProducts();
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

    private getProducts() {
        this.productService.getProducts().subscribe(products => {
            this.products = products;
        });
    }

}
