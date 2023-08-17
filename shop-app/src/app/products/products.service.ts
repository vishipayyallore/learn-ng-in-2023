import { Injectable } from '@angular/core';

import { ProductInterface } from './product-interface';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor() {}

    getProducts(): ProductInterface[] {
        return [
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
    }
}
