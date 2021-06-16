import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RatingComponent } from './components/rating/rating.component';
import { CartQuantityComponent } from './components/shared/cart-quantity/cart-quantity.component';
import { OtpComponent } from './components/otp/otp.component';
import { EmailPhoneComponent } from './components/email-phone/email-phone.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminAddComponent } from './components/admin/admin-add/admin-add.component';
import { AdminEditComponent } from './components/admin/admin-edit/admin-edit.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { BybrandComponent } from './components/admin/bybrand/bybrand.component';
import { BymodelnoComponent } from './components/admin/bymodelno/bymodelno.component';

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
		CartQuantityComponent,
		OtpComponent,
		EmailPhoneComponent,
		FileUploadComponent,
		AdminComponent,
		AdminAddComponent,
		AdminEditComponent,
		AdminListComponent,
		BybrandComponent,
		BymodelnoComponent
		
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
