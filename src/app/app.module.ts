import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
	declarations: [
		AppComponent,
  CartComponent,
  CartListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
