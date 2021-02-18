import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  title: string;
  message: string;
}

export interface TypeProcedure {
  cols: number;
  rows: number;
  name: string;
  description:string;
  color:string;
}

@Component({
  selector: 'app-alert-new-procedure',
  templateUrl: './alert-new-procedure.component.html',
  styleUrls: ['./alert-new-procedure.component.css']
})
export class AlertNewProcedureComponent implements OnInit {
  
  tiles: TypeProcedure[] = [
    {name: 'Tupa', cols: 2, rows: 2,description:'Trámite de documentos Varios(Carta, Informe, Oficio, Solicitud, Queja, etc)',color:'white'},
    {name: 'No Tupa', cols: 2, rows: 2,
    description:'Trámite de documentos de procedimientos administrativos de la Municipalidad Provincial de Sullana',color:'white'}
  ];

  constructor(
    public dialogRef: MatDialogRef<AlertNewProcedureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


    ngOnInit(): void{}

    onOkClick(): void {
      this.dialogRef.close();
    }




}
