import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {LoginDetails} from './login-details';
import{HttpHeaderResponse} from '@angular/common/http';
import { throwError, from } from 'rxjs';
import{catchError} from 'rxjs/operators';
// import { HttpClient } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
serverurl="https://localhost:44308/api/Login/GetLogin"
  constructor(private http:HttpClient) { }
  getdata()
  {
    return this.http.get(this.serverurl);
    
  }
}
