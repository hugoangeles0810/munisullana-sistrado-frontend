import { Component, OnInit } from '@angular/core';
import { ProcedureItem } from '../model/procedure-item';
import { ProcedureService } from '../procedure.service';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProcedureDetail } from '../model/procedure-detail';
import { ModalObservarComponent } from '../modal-observar/modal-observar.component';
import { SolicitudEstado } from '../model/solicitud-estado';
import { ModalDeriveComponent } from '../modal-derive/modal-derive.component';

@Component({
  selector: 'app-pending-procedures',
  templateUrl: './pending-procedures.component.html',
  styleUrls: ['./pending-procedures.component.css']
})
export class PendingProceduresComponent implements OnInit {


  items: Array<ProcedureItem> = [];
  detail: ProcedureDetail = null;

  constructor(
    private procedureService: ProcedureService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadTramites();
  }

  private loadTramites() {
    this.procedureService.getProceduresByState(SolicitudEstado.RECIBIDO).subscribe(
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
              this.openDerivar();
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

  openDerivar() {
    this.modalService.open(ModalDeriveComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result == 'derivar') {
        this.procedureService.derivarTramite({
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