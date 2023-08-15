import { Pipe, PipeTransform } from '@angular/core';

import { ProductInterface } from './product-interface';

@Pipe({
    name: 'sort',
    // pure: false /* pipes that are impure call the transform method every time the change detection cycle is triggered. */
})
export class SortPipe implements PipeTransform {
    transform(value: ProductInterface[]): ProductInterface[] {
        if (value) {
            return value.sort((a: ProductInterface, b: ProductInterface) => {
                if (a.name < b.name) {
                    return -1;
                } else if (b.name < a.name) {
                    return 1;
                }
                return 0;
            });
        }
        return [];
    }
}
