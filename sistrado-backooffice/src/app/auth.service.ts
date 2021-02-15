import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private setSession(authResult) {
    localStorage.setItem('dniCiudadano',authResult.dni);
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

  getUser(){
    return localStorage.getItem('dniCiudadano');
  }

  logout() {
    localStorage.removeItem('dniCiudadano');
    localStorage.removeItem('token');
  }
}
