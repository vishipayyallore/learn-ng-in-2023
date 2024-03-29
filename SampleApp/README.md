# SampleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Versioning

Major.Minor.Patch

## Few Commands

```bash
npm list

ng new AppName --skip-install

npx http-server ./dist/sample-app -p 8000 -c-1 -a 127.0.0.1
```

## Build Process

> 1. TypeScript compiler will compile the .ts files into JavaScripts.
> 1. Angular Compiler (called as `ngc`) it will also transform the templates into JavaScripts Statements. It will also transform the CSS into JavaScripts Statements. It will also transform the HTML into JavaScripts Statements.
> 1. WebPack (Build Process) is a module bundler. It will bundle all the JavaScripts files into one file. It will also bundle all the CSS files into one file. It will also bundle all the HTML files into one file. It will also bundle all the images into one file. It will also bundle all the fonts.

### ngc (Angular Compiler)

> 1. Compile Angular decorators, including components and their templates.
> 1. Apply TypeScript’s type-checking rules to component templates.
> 1. Re-compile quickly when the developer makes a change.

**Reference(s):**

> 1. [https://blog.angular.io/how-the-angular-compiler-works-42111f9d2549](https://blog.angular.io/how-the-angular-compiler-works-42111f9d2549)

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
