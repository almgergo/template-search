import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateCreatorModule } from './template-creator/template-creator.module';

import { BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateCreatorModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
