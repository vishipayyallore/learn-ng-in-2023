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
export class ProductDetailComponent {
    @Input() name = '';

    @Output() bought = new EventEmitter<string>();

    constructor() {
        console.log(`Name is ${this.name} in the constructor`);
    }

    buy() {
        this.bought.emit(this.name);
    }

    get productName(): string {
        console.log(`Get ${this.name}`);
        return this.name;
    }
}
