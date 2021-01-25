import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Account } from './model/account';
import { LoginRequest } from './model/request/login-request';
import { environment } from 'src/environments/environment';
import { RegistroRequest } from './model/request/registro-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  registro(registroRequest: RegistroRequest): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/webapp/api/v1/ciudadano/registro`, registroRequest)
      .pipe();
  }

  verificar(token): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/webapp/api/v1/ciudadano/verificar/${token}`)
      .pipe();
  }

  login(loginRequest: LoginRequest): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/webapp/api/v1/ciudadano/login`, loginRequest)
      .pipe(
        map((res: Account) => {
          this.setSession(res);
          return res;
        })
      );
  }

  private setSession(authResult) {
    localStorage.setItem('token', authResult.token);
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

  logout() {
    localStorage.removeItem('token');
  }

}
