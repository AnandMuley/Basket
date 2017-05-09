import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EcomBasketComponent } from './ecom-basket/ecom-basket.component';
import {EcomProductComponent} from './ecom-product/ecom-product.component'

@NgModule({
  declarations: [
    AppComponent,
    EcomBasketComponent,
    EcomProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
