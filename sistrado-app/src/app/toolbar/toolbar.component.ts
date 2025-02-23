import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertNewProcedureService } from '../services/alert-new-procedure.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    user: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertNewProcedureService
  ) { }

  ngOnInit(): void {
     this.user=this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    window.location.href = '/login';
    //this.router.navigate(['/login']);
  }
  newProcedure(){
    this.alertService.showAlertNew('Solicitud de Trámite virtual (Seleccione una opción)','', () => {
    });
  }
  myProcedure(){
    this.router.navigate(['/home/procedures']);
  }
}
