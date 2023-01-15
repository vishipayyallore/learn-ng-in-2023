import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';

const components = [
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    NgmaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
