import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAprobarComponent } from '../modal-aprobar/modal-aprobar.component';
import { ModalObservarComponent } from '../modal-observar/modal-observar.component';
import { ProcedureDetail } from '../model/procedure-detail';
import { ProcedureItem } from '../model/procedure-item';
import { SolicitudEstado } from '../model/solicitud-estado';
import { ProcedureService } from '../procedure.service';

@Component({
  selector: 'app-approve-procedures',
  templateUrl: './approve-procedures.component.html',
  styleUrls: ['./approve-procedures.component.css']
})
export class ApproveProceduresComponent implements OnInit {

  items: Array<ProcedureItem> = [];
  detail: ProcedureDetail = null;

  constructor(private procedureService: ProcedureService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadTramites();
  }

  private loadTramites() {
    this.procedureService.getProceduresByState(SolicitudEstado.REVISADO).subscribe(
      procedures => {
        console.log(procedures);
        this.items = procedures;
      },
      error => console.log(error)
    );
  }

  open(content, item) {
    this.procedureService.getProcedureDetail(item.id)
      .subscribe(
        procedure => {
          console.log(procedure);
          this.detail = procedure;
          this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            console.log(`Closed with: ${result}`);
            if (result == 'observar') {
              this.openObservar();
            } else if (result == 'derivar') {
              this.openAprobar();
            }
          }, (reason) => {
            console.log(`Dismissed`);
          });
        }
      );
  }

  openObservar() {
    this.modalService.open(ModalObservarComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result instanceof Object) {
        this.procedureService.observarTramite({
          tramiteId: this.detail.id,
          observaciones: result.observaciones
        }).subscribe(
          result => { 
            this.loadTramites() 
          }
        );
      }
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }

  openAprobar() {
    this.modalService.open(ModalAprobarComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result == 'aprobar') {
        this.procedureService.aprobarTramite({
          tramiteId: this.detail.id
        }).subscribe(
          result => { 
            this.loadTramites() 
          }
        );
      }
    }, (reason) => {
      console.log(`Dismissed`);
    });
  }
}
