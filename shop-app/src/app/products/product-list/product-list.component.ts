import { Component } from '@angular/core';

@Component({
    selector: 'sv-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
    selectedProduct = '';

    onBuy(name: string) {
        window.alert(`You just bought ${name}!`);
    }
}
