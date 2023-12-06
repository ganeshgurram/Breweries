import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { error } from 'node:console';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { User } from '../models/User';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
   // @Inject('BASE_URL') baseUrl: string,
    private router: Router
  ) {
    this.baseUrl = "https://localhost:7264/api/User/";
  }
  Signup(signup: User): Observable<string> {
    return this.http.post(
      this.baseUrl + 'Register',
      signup, {responseType:'text'}
    );
  }


  Loginrec(login: Login): Observable<any> {
    return this.http.post(
      this.baseUrl + 'Login',
      login,{responseType: 'text'}
    );
  }


  getUserDetails(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/Authentication/UserDetails');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('ss_User') !== null;
  }
  setUserLoggedIn(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'api/User/Me');
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('userDetails') || '{}');
  }



  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

}
