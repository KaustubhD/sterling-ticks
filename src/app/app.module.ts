import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { EmailPhoneComponent } from './components/email-phone/email-phone.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OtpComponent } from './components/otp/otp.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { RegisterComponent } from './components/register/register.component';
import { CartQuantityComponent } from './components/shared/cart-quantity/cart-quantity.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
    	ProductDetailComponent,
		ProductCardComponent,
		RegisterComponent,
		LoginComponent,
		HomeComponent,
		ProductListComponent,
		HeaderComponent,
		FooterComponent,
  		RatingComponent,
		OtpComponent,
		EmailPhoneComponent,
		CartComponent,
		CartQuantityComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
