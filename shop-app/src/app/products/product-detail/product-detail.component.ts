import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    ChangeDetectionStrategy,
} from '@angular/core';

import { ProductInterface } from '../product-interface';

@Component({
    selector: 'sv-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit, OnChanges {
    @Input() product: ProductInterface | undefined;

    @Output() bought = new EventEmitter<string>();

    constructor() {
        console.log(
            `Name is ${this.product?.name} in the ProductDetailComponent::constructor`
        );
    }

    ngOnInit(): void {
        console.log(
            `Name is ${this.product?.name} in the ProductDetailComponent::ngOnInit`
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        const product = changes['product'];
        if (!product.isFirstChange()) {
            const oldValue = product.previousValue.name;
            const newValue = product.currentValue.name;
            console.log(`Product changed from ${oldValue} to ${newValue}`);
        }
    }

    buy() {
        this.bought.emit(this.product?.name);
    }

    get productName(): string {
        console.log(`Get::productName() ${this.product?.name}`);
        return this.product?.name || '';
    }
}
