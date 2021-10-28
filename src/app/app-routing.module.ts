import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DrivingWithAssarComponent } from './driving-with-assar/driving-with-assar.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HomeComponent } from './home/home.component';
import { IndexFrontComponent } from './index-front/index-front.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{ path: '', redirectTo: 'indexfront', pathMatch: 'full' },
{ path: 'indexfront', component: IndexFrontComponent },
{ path: 'aboutUs', component: AboutUsComponent },
{ path: 'contactUs', component: ContactUsComponent },
{ path: 'drivingWithAssar', component: DrivingWithAssarComponent },
{ path: 'franchise', component: FranchiseComponent },
{ path: 'signup', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
