// import { Signup } from './signup/signup';
import { LoginComponent } from './login/login.component';
import { getTestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { sign } from 'crypto';
import { error } from 'console';
// import { RestService } from './signup/rest.service';
// import {SharedService} from './shared.service'
// import{freeApiServices} from './services/freeapi.service'
// import { Comments } from './classes/comments';
// declare const myfunction: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[ApiService]
})
export class AppComponent {
  title = 'Vehicle';

  // 
  // constructor(private _freeApiService:freeApiServices) {
  // constructor(private rs:RestService){}


  // header :Signup[]=[];

  // ngOnInit()
  // {
  // this.rs.readsignup()
  // .subscribe
  // (
  //   (Response)=>
  //   {
  //     this.Signup= Response[0]["data"];
  //   },
  //   (error)=>
  //   {
  //     console.log("No Data Found"+ error);

  //   }

  // );

  // }

}
