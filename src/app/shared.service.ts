import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable()
export class SharedService {
  readonly APIUrl = "";
  constructor(private http: HttpClient) { }


  getsignupList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/signup/');
  }


  addsignup(val: any) {
    return this.http.post(this.APIUrl + '/signup/', val);
  }

  updatesignup(val: any) {
    return this.http.put(this.APIUrl + '/signup/', val);
  }


  deletesignup(val: any) {
    return this.http.delete(this.APIUrl + '/signup/', val);
  }


  // login


  getLoginList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/login/');
  }


  addlogin(val: any) {
    return this.http.post(this.APIUrl + '/login/', val);
  }

  updatelogin(val: any) {
    return this.http.put(this.APIUrl + '/login/', val);
  }


  deletelogin(val: any) {
    return this.http.delete(this.APIUrl + '/login/', val);
  }


  getAllNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }


}

