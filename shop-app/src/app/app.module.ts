import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { FilterPipe } from './products/filter.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { RxjsDemosComponent } from './rxjs-demos/rxjs-demos.component';

@NgModule({
    declarations: [AppComponent, CopyrightDirective, NumericDirective, PermissionDirective, KeyLoggerComponent, RxjsDemosComponent],
    imports: [BrowserModule, FilterPipe, AppRoutingModule, ProductsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
