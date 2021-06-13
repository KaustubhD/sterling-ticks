import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartQuantityComponent } from './components/shared/cart-quantity/cart-quantity.component';

@NgModule({
	declarations: [
		AppComponent,
  		CartQuantityComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
