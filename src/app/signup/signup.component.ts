import { HttpClientModule } from '@angular/common/http';
// import { RestService } from './rest.service';
import { SharedService } from './../shared.service';
// import { Component, OnInit } from '@angular/core';
// import { Client } from 'RestService/ClientService '; 
// import { ToastrServices } from;
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import{User} from '../../Shared/user.model';
// import{UserService} from '../../SharedService';
// import { RestService } from './rest.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

}
)


export class SignupComponent implements OnInit {

  constructor(private service: SharedService) { }
  SignupList: any = [];





  ngOnInit(): void {

    this.refreshsignup();
  }

  addClick(){
    this.refreshsignup();
  }

  refreshsignup() {
    this.service.getsignupList().subscribe(data => {
      this.SignupList = data;
    });
  }


}

