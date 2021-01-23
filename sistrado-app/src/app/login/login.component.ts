import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  authError$ = new BehaviorSubject<string>("");

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoginIn()) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    this.authError$.next("");
    this.isLoading$.next(true);
    this.authService
      .login({email: this.form.get('email').value, password: this.form.get('password').value})
      .subscribe(
        (account) => { 
          this.isLoading$.next(false);
          this.router.navigate(['/home']);
        },
        (err) => {
          this.isLoading$.next(false);
          this.authError$.next(err.error.message);
        }
      );
  }

  getErrorMessage() {
    if (this.form.get('email').hasError('email')) {
      return 'No es un correo válido';
    }

    return 'Debe ingresar este campo';
  }

}
