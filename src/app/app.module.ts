import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpComponent } from './components/otp/otp.component';
import { EmailPhoneComponent } from './components/email-phone/email-phone.component';



@NgModule({
  declarations: [
    AppComponent,
    OtpComponent,
    EmailPhoneComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  OtpComponent,
EmailPhoneComponent]
})
export class AppModule { }
