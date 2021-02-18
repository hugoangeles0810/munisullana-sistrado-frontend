import { Component, OnInit } from '@angular/core';
import { ProcedureItem } from '../model/procedure-item';
import { ProcedureService } from '../procedure.service';

@Component({
  selector: 'app-pending-procedures',
  templateUrl: './pending-procedures.component.html',
  styleUrls: ['./pending-procedures.component.css']
})
export class PendingProceduresComponent implements OnInit {


  items: Array<ProcedureItem> = [];

  constructor(
    private procedureService: ProcedureService
  ) { }

  ngOnInit(): void {
    this.procedureService.getPendingProcedures().subscribe(
      procedures => {
        console.log(procedures);
        this.items = procedures;
      },
      error => console.log(error)
    );
  }

}
