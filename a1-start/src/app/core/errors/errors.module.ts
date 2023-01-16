import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';

const components = [
  NotFoundComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    NgmaterialModule,
    NgOptimizedImage,
  ]
})
export class ErrorsModule { }
