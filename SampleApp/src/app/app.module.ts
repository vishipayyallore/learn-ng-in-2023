import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InlineComponent } from './components/inlinecomponent/inline.component';
import { CodeBehindComponent } from './components/codebehindcomponent/codebehind.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponent,
    CodeBehindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
