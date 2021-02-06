import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-my-procedures',
  templateUrl: './my-procedures.component.html',
  styleUrls: ['./my-procedures.component.css']
})
export class MyProceduresComponent implements OnInit {

  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

}
