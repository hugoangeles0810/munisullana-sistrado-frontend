import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertDialogService } from '../alert-dialog.service';
import { TramiteDetailResponse } from '../model/response/tramite-detail.response';
import { TramiteResponse } from "../model/response/tramite.response";
import { GetTramiteDetailService } from '../services/get-tramite-detail.service';
import { ListTramiteAllService } from '../services/list-tramite-all.service';
import { RegistrarTramiteService } from '../services/registrar-tramite.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-new-procedure',
  templateUrl: './new-procedure.component.html',
  styleUrls: ['./new-procedure.component.css']
})


export class NewProcedureComponent implements OnInit {

  procedures: Array<TramiteResponse> = [];

  tramiteSelected: TramiteDetailResponse = null;


  constructor(
      private list_procedures_all:ListTramiteAllService,
      private getTramiteDetailService: GetTramiteDetailService,
      private uploadService: UploadService,
      private registrarTramiteService: RegistrarTramiteService,
      private alertService: AlertDialogService,
      private router: Router) { }

  ngOnInit(): void {
    this.listar_procedures();
  }
  
  public listar_procedures(){
    this.list_procedures_all.list_procedures_all()
    .subscribe(resp => {
      this.procedures = resp;
    })
  }

  onProcedureChange(id) {
    this.getTramiteDetailService.getTramiteDetail(id).subscribe(
      tramite => {
        this.tramiteSelected = tramite;
        console.log(tramite);
      }
    );
  }

  subirArchivo(requisito, files) {
    this.uploadService.postFile(files[0]).subscribe(
      response => {
        requisito.adjunto = response.filePath;
      },
      error => {
        console.log(error);
      }
    );
  }

  registrarTramite() {
    console.log("Click en tramite");
    this.registrarTramiteService.registrarTramite({
      tramiteId: this.tramiteSelected.id,
      requisitos: this.tramiteSelected.requisitos.map( item => {
        return {
          requisitoId: item.id,
          adjunto: item.adjunto
        }
      })
    }).subscribe(
      (result) => {
        this.alertService.showAlert("Solicitud recibida", "Hemos recibido tu solicitud, nro: " + result.numero, () => {
          this.router.navigate(['/home/procedures']);
        });
      },
      (error) => {
        this.alertService.showAlert("Error al registrar solicitud", "Ocurrió un error al registrar tu solicitud, vuelve a intentarlo en unos minutos.")
      }
    );
  }
  
}
