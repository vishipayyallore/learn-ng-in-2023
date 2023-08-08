import { Component, Input } from '@angular/core';

@Component({
    selector: 'sv-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
    @Input() name = '';
}
