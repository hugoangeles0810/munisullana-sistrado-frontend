import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertDialogService } from '../alert-dialog.service';
import { ProcedureDetail } from '../model/response/procedure-detail';
import { GetProcedureDetailService } from '../services/get-procedure-detail.service';
import { UpdateProcedureService } from '../services/update-procedure.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-edit-procedure',
  templateUrl: './edit-procedure.component.html',
  styleUrls: ['./edit-procedure.component.css']
})
export class EditProcedureComponent implements OnInit {


  procedure: ProcedureDetail;

  constructor(private route: ActivatedRoute,
    private getProcedureDetail: GetProcedureDetailService,
    private uploadService: UploadService,
    private updateProcedureService: UpdateProcedureService,
    private alertService: AlertDialogService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTramiteDetail(id);
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

  getTramiteDetail(id: string) {
    this.getProcedureDetail.getProcedureDetail(id)
      .subscribe(
        procedure => {
          this.procedure = procedure;
          console.log(procedure);
        }
      );
  }

  subsanarTramite() {
    let request = {
      id: this.procedure.id + "",
      requisitos: this.procedure.adjuntos.map((item) => { return {
        id: item.id + "",
        adjunto: item.adjunto
      } })
    }

    this.updateProcedureService.subsanarTramite(request).subscribe(
      (result) => {
        this.alertService.showAlert("Solicitud subsanada", "Hemos recibido tu solicitud, nro: " + result.numero, () => {
          this.router.navigate(['/home/procedures']);
        });
      },
      error => {
        this.alertService.showAlert("Error al registrar solicitud", "Ocurrió un error al registrar tu solicitud, vuelve a intentarlo en unos minutos.");
      }
    );
  }

}
