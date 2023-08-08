import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sv-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
    @Input() name = '';

    @Output() bought = new EventEmitter<string>();

    buy() {
        this.bought.emit(this.name);
    }
}
