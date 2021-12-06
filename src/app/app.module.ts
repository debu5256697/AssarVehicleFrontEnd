import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// // import{Http}from '@angular/common/http'

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
import { NavbComponent } from './navb/navb.component';
import { EveryTravelPartnerComponent } from './every-travel-partner/every-travel-partner.component';
import { HatchbackCarBookComponent } from './hatchback-car-book/hatchback-car-book.component';
import { OTPComponent } from './otp/otp.component';
import { TimerComponent } from './timer/timer.component';
import { MobileNumberOtpComponent } from './mobile-number-otp/mobile-number-otp.component';
import { ThankyouVehiclenameComponent } from './thankyou-vehiclename/thankyou-vehiclename.component';
import { BookNowComponent } from './book-now/book-now.component';
import { EveryTravelPartner1Component } from './every-travel-partner1/every-travel-partner1.component';
import { EveryTravelPartner2Component } from './every-travel-partner2/every-travel-partner2.component';
import { TheGatewayCarComponent } from './the-gateway-car/the-gateway-car.component';
import { OneCabManyDestinationsComponent } from './one-cab-many-destinations/one-cab-many-destinations.component';
import { SharedService } from './shared.service';
//  import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ShowdataComponent } from './showdata/showdata.component';
// import { RestService } from './signup/rest.service';
// import { RouterModule } from '@angular/router';
// import { appRoutes } from './route';
// import { freeApiServices } from './services/freeapi.service';
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
    HomeComponent,
    NavbComponent,
    EveryTravelPartnerComponent,
    HatchbackCarBookComponent,
    OTPComponent,
    TimerComponent,
    MobileNumberOtpComponent,
    ThankyouVehiclenameComponent,
    BookNowComponent,
    EveryTravelPartner1Component,
    EveryTravelPartner2Component,
    TheGatewayCarComponent,
    OneCabManyDestinationsComponent,
    ShowdataComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
