import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ViewEncapsulation,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'sv-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
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

    buy() {
        this.bought.emit(this.name);
    }

    get productName(): string {
        console.log(`Get::productName() ${this.name}`);
        return this.name;
    }
}
