import { Component, OnInit } from '@angular/core';
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
