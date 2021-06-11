import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailPhoneComponent } from './components/email-phone/email-phone.component';
import { OtpComponent } from './components/otp/otp.component';


const routes: Routes = [
  {path: '',component : EmailPhoneComponent},
  {path: 'otp',component : OtpComponent},
  {path: 'email-phone',component:EmailPhoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
