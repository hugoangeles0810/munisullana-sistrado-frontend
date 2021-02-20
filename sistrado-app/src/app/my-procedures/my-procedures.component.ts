import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProcedureDetail, ProcedureItem } from '../model/request/registro-procedure';
import { ListProceduresService } from '../services/list-procedures.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-procedures',
  templateUrl: './my-procedures.component.html',
  styleUrls: ['./my-procedures.component.css']
})
export class MyProceduresComponent implements OnInit {

  items: Array<ProcedureItem> = [];
  detail: ProcedureDetail = null;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private list_procedures:ListProceduresService,
      private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.listar_procedures();
  }
  public listar_procedures(){
    this.list_procedures.getProcedures()
    .subscribe(procedures=>{
      this.items=procedures;
    },error=> console.log(error))
  }

  open(content, item) {
    this.list_procedures.getProcedureDetail(item.id)
      .subscribe(
        procedure => {
          this.detail = procedure;
          this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            console.log(`Closed with: ${result}`);
            if (result == 'imprimir') {
              this.openImprimir();
            }
          }, (reason) => {
            console.log(`Dismissed`);
          });
        }
      );
  }

  openImprimir() {
  }


}
