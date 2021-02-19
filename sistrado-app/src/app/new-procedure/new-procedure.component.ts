import { Component, OnInit } from '@angular/core';
import { TramiteRequest } from '../model/request/registro-procedure';
import { ListTramiteAllService } from '../services/list-tramite-all.service';

@Component({
  selector: 'app-new-procedure',
  templateUrl: './new-procedure.component.html',
  styleUrls: ['./new-procedure.component.css']
})


export class NewProcedureComponent implements OnInit {

  procedure:TramiteRequest[]=[];

  data: any[]=[];


  constructor(private list_procedures_all:ListTramiteAllService) { }

  ngOnInit(): void {
    this.listar_procedures();
  }
  public listar_procedures(){
    this.list_procedures_all.list_procedures_all()
    .subscribe(resp=>{
      this.data=resp;
    })
  }


}
