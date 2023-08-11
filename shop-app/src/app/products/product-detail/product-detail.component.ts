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

@Component({
    selector: 'sv-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit, OnChanges {
    @Input() name = '';

    @Output() bought = new EventEmitter<string>();

    constructor() {
        console.log(
            `Name is ${this.name} in the ProductDetailComponent::constructor`
        );
    }

    ngOnInit(): void {
        console.log(
            `Name is ${this.name} in the ProductDetailComponent::ngOnInit`
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        const product = changes['name'];

        if (!product.isFirstChange()) {
            const oldValue = product.previousValue;
            const newValue = product.currentValue;
            console.log(`Product changed from ${oldValue} to ${newValue}`);
        }
    }

    buy() {
        this.bought.emit(this.name);
    }

    get productName(): string {
        console.log(`Get::productName() ${this.name}`);
        return this.name;
    }
}
