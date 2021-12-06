import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { compileFunction } from 'vm';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DrivingWithAssarComponent } from './driving-with-assar/driving-with-assar.component';
import { EveryTravelPartnerComponent } from './every-travel-partner/every-travel-partner.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HomeComponent } from './home/home.component';
import { IndexFrontComponent } from './index-front/index-front.component';
import { LoginComponent } from './login/login.component';
import { MobileNumberOtpComponent } from './mobile-number-otp/mobile-number-otp.component';
import { OTPComponent } from './otp/otp.component';
import { SignupComponent } from './signup/signup.component';
import { ThankuBookingComponent } from './thanku-booking/thanku-booking.component';
import { ThankyouVehiclenameComponent } from './thankyou-vehiclename/thankyou-vehiclename.component';
import { VehicleCategoryComponent } from './vehicle-category/vehicle-category.component';
import { VehicleChooseComponent } from './vehicle-choose/vehicle-choose.component';




const routes: Routes = [{ path: '', redirectTo: 'indexfront', pathMatch: 'full' },
{ path: 'indexfront', component: IndexFrontComponent },
{ path: 'aboutUs', component: AboutUsComponent },
{ path: 'contactUs', component: ContactUsComponent },
{ path: 'drivingWithAssar', component: DrivingWithAssarComponent },
{ path: 'franchise', component: FranchiseComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{ path: 'indexfront2', component: IndexFrontComponent },
// // { path: 'vehicleCategory', component: VehicleCategoryComponent }
{ path: 'vehicle', component: VehicleCategoryComponent },
{ path: 'vehicleChoose', component: VehicleChooseComponent },
{ path: 'booknow', component: BookNowComponent },
{ path: 'EveryTravelPartnerComponent', component: EveryTravelPartnerComponent },
{ path: 'OTP', component: OTPComponent },
{ path: 'MobileOtp', component: MobileNumberOtpComponent },
{ path: 'ThankuBooking', component: ThankuBookingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
