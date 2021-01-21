import { Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  isLoading$ = new Subject<boolean>();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.isLoading$.next(false);
  }

  login() {
    this.isLoading$.next(true);
    this.loginService
      .login({email: this.email, password: this.password})
      .pipe(
        tap((result) => {
          this.isLoading$.next(false);
        })
      )
      .subscribe({
        next(account) { console.log(account);},
        error(err) { console.error(err);},
        complete() { console.log('done');}
      });
  }

}
