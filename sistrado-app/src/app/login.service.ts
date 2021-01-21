import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Account } from './model/account';
import { LoginRequest } from './model/request/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<Account> {
    return this.http.post<Account>("http://localhost:8080/webapp/api/v1/ciudadano/login", loginRequest);
  }

}
