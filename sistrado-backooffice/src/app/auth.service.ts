import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { LoginRequest } from './model/request/login.request';
import { Account } from './model/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private setSession(authResult) {
    localStorage.setItem('name',authResult.nombres + " " + authResult.apePaterno);
    localStorage.setItem('token', authResult.token);
  }

  login(loginRequest: LoginRequest): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/backoffice/api/v1/usuario/login`, loginRequest)
      .pipe(
        map((res: Account) => {
          this.setSession(res);
          return res;
        })
      );
  }

  isLoginIn() {
    return this.getToken() != null;
  }

  isLogOut() {
    return !this.isLoginIn();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser(){
    return localStorage.getItem('name');
  }

  logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
  }
}
