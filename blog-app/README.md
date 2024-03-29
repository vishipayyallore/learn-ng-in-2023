# BlogApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Commands

```bash
ng new blog-app --routing --style=scss --prefix=sv --dry-run

npm install bootstrap

ng generate module core

ng generate component header --path=src/app/core --module=core --export

ng generate module shared

ng generate component footer --path=src/app/shared --module=shared --export

ng generate module contact

ng generate component contact --path=src/app/contact --module=contact --export --flat

ng generate module articles --route=articles --module=app-routing

npm install @scullyio/init @scullyio/ng-lib @scullyio/scully @scullyio/scully-plugin-puppeteer --force

ng generate @scullyio/init:markdown --project blog-app

ng build

npx scully --project blog-app # Routes Generation

npx scully serve --project blog-app

ng generate @scullyio/init:post --name="Angular and Scully"
```

![Executing the Project](./src/assets/ProjectExecution.PNG)

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
