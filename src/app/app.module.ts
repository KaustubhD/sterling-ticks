import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
	declarations: [
		AppComponent,
		ProductCardComponent,
		RegisterComponent,
		LoginComponent,
  HomeComponent,
  ProductListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
