# ShopApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Commands

```bash
ng new shop-app --routing --style=scss --prefix=sv --dry-run

ng generate module products

ng generate component products/product-list --dry-run

ng generate component products/product-detail --dry-run

ng generate component products/product --standalone --dry-run

ng generate interface products/product-interface --dry-run

ng generate pipe products/sort --dry-run

ng generate pipe products/filter --standalone --dry-run

ng generate directive copyright --dry-run
```

```html
<!-- property binding -  -->
<!-- <span [innerText]="title"></span>  -->

<!-- <p class="star"></p>
<p style="color: greenyellow"></p> -->

<!-- class binding -  -->
<!-- <p [class.star]="isLiked"></p>

<p [class]="currentClasses"></p>

currentClasses = {
  star: true,
  active: false
}; -->

<!-- style binding -  -->
<!-- <p [style.width.px]="100"></p>
<p [style]="currentStyles"></p> -->

<!-- currentStyles = {
  color: 'greenyellow',
  width: '100px'
}; -->

<!-- event binding -  -->
<!-- <button (click)="onClick()">Click me</button>  -->
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
