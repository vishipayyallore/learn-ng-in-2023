import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { ProductHostDirective } from './product-host.directive';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductViewService } from './product-view/product-view.service';

@NgModule({
    declarations: [ProductListComponent, ProductDetailComponent, SortPipe, ProductHostDirective, FavoritesComponent, ProductViewComponent],
    imports: [CommonModule,],
    providers: [ProductViewService,],
    exports: [ProductListComponent,],
})
export class ProductsModule { }
