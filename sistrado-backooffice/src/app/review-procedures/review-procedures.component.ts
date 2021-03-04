import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalObservarComponent } from '../modal-observar/modal-observar.component';
import { ModalRevisarComponent } from '../modal-revisar/modal-revisar.component';
import { ProcedureDetail } from '../model/procedure-detail';
import { ProcedureItem } from '../model/procedure-item';
import { SolicitudEstado } from '../model/solicitud-estado';
import { ProcedureService } from '../procedure.service';

@Component({
  selector: 'app-review-procedures',
  templateUrl: './review-procedures.component.html',
  styleUrls: ['./review-procedures.component.css']
})
export class ReviewProceduresComponent implements OnInit {

  items: Array<ProcedureItem> = [];
  detail: ProcedureDetail = null;

  constructor(private procedureService: ProcedureService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadTramites();
  }

  private loadTramites() {
    this.procedureService.getProceduresByState(SolicitudEstado.EN_TRAMITE).subscribe(
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
    this.modalService.open(ModalRevisarComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result == 'derivar') {
        this.procedureService.revisarTramite({
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
