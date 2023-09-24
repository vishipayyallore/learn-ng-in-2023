import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductInterface } from './product-interface';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor() { }

    private products = [
        {
            name: 'Webcam',
            price: 100
        },
        {
            name: 'Microphone',
            price: 200
        },
        {
            name: 'Wireless keyboard',
            price: 85
        }
    ];

    getProducts(): Observable<ProductInterface[]> {
        return of(this.products);
    }

    // Method 1
    // getProducts(): ProductInterface[] {
    //     return [
    //         {
    //             name: 'Webcam',
    //             price: 100,
    //         },
    //         {
    //             name: 'Microphone',
    //             price: 200,
    //         },
    //         {
    //             name: 'Wireless keyboard',
    //             price: 85,
    //         },
    //     ];
    // }
}
