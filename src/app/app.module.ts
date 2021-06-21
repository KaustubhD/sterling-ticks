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
import { LoginService } from './services/login.service';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './guards/AuthGuard/auth.guard';
import { AdminGuard } from './guards/AdminGuard/admin.guard';
import { NegateAuthGuard } from './guards/NegateAuth/negate-auth.guard';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminAddComponent } from './components/admin/admin-add/admin-add.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { BymodelnoComponent } from './components/admin/bymodelno/bymodelno.component';
import { AdminEditComponent } from './components/admin/admin-edit/admin-edit.component';



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
		CartComponent,
		CartQuantityComponent,
		FileUploadComponent,
		AdminAddComponent,
		AdminEditComponent,
		AdminListComponent,
		BymodelnoComponent,
		AdminComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [
		LoginService,
		AuthGuard,
		AdminGuard,
		NegateAuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
