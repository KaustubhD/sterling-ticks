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
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';

import { AdminAddComponent } from './components/admin/admin-add/admin-add.component';

import { BymodelnoComponent } from './components/admin/bymodelno/bymodelno.component';
import { AdminEditComponent } from './components/admin/admin-edit/admin-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-add', component: AdminAddComponent},
  {path: 'admin-edit/:model', component: AdminEditComponent},
  {path: 'admin-list', component: AdminListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'otp',component : OtpComponent},
  {path: 'email-phone',component:EmailPhoneComponent},
  {path: 'products' , component: ProductListComponent},
  {path: 'product/:model', component: ProductDetailComponent},
  {path: 'file-upload', component: FileUploadComponent},

  {path: 'bymodelno', component: BymodelnoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
	onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
