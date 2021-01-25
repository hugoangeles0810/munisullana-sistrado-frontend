import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

import { RegistroRequest } from '../model/request/registro-request';
import { AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apePaterno: new FormControl('', [Validators.required]),
    apeMaterno: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    representante: new FormControl(false),
    departamento: new FormControl('', [Validators.required]),
    provincia: new FormControl('', [Validators.required]),
    distrito: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    ruc: new FormControl(''),
    dirFiscal: new FormControl('')
  });

  hide = true;

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService,
    private router: Router,
    private alertService: AlertDialogService) { }

  ngOnInit(): void {
    if (this.authService.isLoginIn()) {
      this.router.navigate(['/home']);
    }

  }

  registro() {
    let request: RegistroRequest =  {
      nombres: this.form.get('nombre').value,
      apePaterno: this.form.get('apePaterno').value,
      apeMaterno: this.form.get('apeMaterno').value,
      celular: this.form.get('celular').value,
      dni: this.form.get('dni').value,
      email: this.form.get('email').value,
      clave: this.form.get('password').value,
      direccion: this.form.get('direccion').value,
      departamento: this.form.get('departamento').value,
      provincia: this.form.get('provincia').value,
      distrito: this.form.get('distrito').value,
      representante: this.form.get('representante').value,
      ruc: this.form.get('representante').value ? this.form.get('ruc').value : null,
      dirFiscal: this.form.get('representante').value ? this.form.get('dirFiscal').value : null
    }

    this.isLoading$.next(true);

    this.authService.registro(request)
      .subscribe(
        (account) => { 
          this.isLoading$.next(false);
          this.alertService.showAlert('Mensaje', 'Usuario registrado con éxito, active su cuenta desde el link enviado a su correo.', () => {
            this.router.navigate(['/login']);
          });
        },
        (err) => {
          this.isLoading$.next(false);
          this.alertService.showAlert("Error", err.error.message ? err.error.message : 'Ocurrió un error intentar registrar su cuenta');
        }
      );
  }

  getErrorMessage() {
    if (this.form.get('email').hasError('email')) {
      return 'No es un correo válido';
    }

    return 'Debe ingresar este campo';
  }

  onSelectChanged(control, $event) {
    this.form.get(control).patchValue($event.value);
  }

}
