import { Component, OnInit } from '@angular/core';
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

  constructor(private procedureService: ProcedureService) { }

  ngOnInit(): void {
    this.loadTramites();
  }

  private loadTramites() {
    this.procedureService.getProceduresByState(SolicitudEstado.APROBADO).subscribe(
      procedures => {
        console.log(procedures);
        this.items = procedures;
      },
      error => console.log(error)
    );
  }

}
