import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { IndexFrontComponent } from './index-front/index-front.component';
import { BillpayComponent } from './billpay/billpay.component';
import { DocumentComponent } from './document/document.component';
import { ForgotOtpComponent } from './forgot-otp/forgot-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChnageGenderComponent } from './profile-chnage-gender/profile-chnage-gender.component';
import { ProfileChnagePasswordComponent } from './profile-chnage-password/profile-chnage-password.component';
import { ReloadComponent } from './reload/reload.component';
import { ThankuBookingComponent } from './thanku-booking/thanku-booking.component';
import { TripdetailComponent } from './tripdetail/tripdetail.component';
import { VehicleCategoryComponent } from './vehicle-category/vehicle-category.component';
import { VehicleChooseComponent } from './vehicle-choose/vehicle-choose.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DrivingWithAssarComponent } from './driving-with-assar/driving-with-assar.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    IndexFrontComponent,
    BillpayComponent,
    DocumentComponent,
    ForgotOtpComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    ProfileChnageGenderComponent,
    ProfileChnagePasswordComponent,
    ReloadComponent,
    ThankuBookingComponent,
    TripdetailComponent,
    VehicleCategoryComponent,
    VehicleChooseComponent,
    AboutUsComponent,
    ContactUsComponent,
    DrivingWithAssarComponent,
    FranchiseComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
