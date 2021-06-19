import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { OtpComponent } from './components/otp/otp.component';
import { EmailPhoneComponent } from './components/email-phone/email-phone.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'otp',component : OtpComponent},
  {path: 'email-phone',component:EmailPhoneComponent},
  {path: 'products' , component: ProductListComponent},
  {path: 'product/:model', component: ProductDetailComponent},
  {path: 'user/:username', component: UserSectionComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'cart',component:CartComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
	onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
