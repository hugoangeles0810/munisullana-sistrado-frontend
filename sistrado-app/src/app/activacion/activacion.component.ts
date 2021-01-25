import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertDialogService } from '../alert-dialog.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-activacion',
  templateUrl: './activacion.component.html',
  styleUrls: ['./activacion.component.css']
})
export class ActivacionComponent implements OnInit {

  constructor(private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private alertService: AlertDialogService) { }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');

    if (!token) {
        this.router.navigate(['']);
    }

    this.activarCuenta(token);
  }

  activarCuenta(token: string) {
    this.authService.verificar(token)
    .subscribe(
      (account) => { 
        this.alertService.showAlert('Mensaje', 'Su cuenta ha sido activada', () => {
          this.router.navigate(['/login']);
        });
      },
      (err) => {
        this.alertService.showAlert("Error", err.error.message ? err.error.message : 'Ocurrió un error intentar activar su cuenta');
      }
    );
  }

}
