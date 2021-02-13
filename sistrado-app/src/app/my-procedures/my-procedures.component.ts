import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ListProceduresService } from '../services/list-procedures.service';

@Component({
  selector: 'app-my-procedures',
  templateUrl: './my-procedures.component.html',
  styleUrls: ['./my-procedures.component.css']
})
export class MyProceduresComponent implements OnInit {

  // displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  displayedColumns: string[] = ['ticket','ciudadano', 'tramite', 'tipo','created','state','actions'];
  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private list_procedures:ListProceduresService ) { }

  ngOnInit(): void {
    this.listar_procedures();
  }
  public listar_procedures(){
    this.list_procedures.list_procedures()
    .subscribe(resp=>{
      this.data=resp;
    })
  }
}
