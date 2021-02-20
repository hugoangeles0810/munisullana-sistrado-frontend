import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProcedureDetail, ProcedureItem } from '../model/request/registro-procedure';


@Injectable({
  providedIn: 'root'
})
export class ListProceduresService {
  

    httpOptions = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
      });

  constructor(private http: HttpClient) { 
  }

  getProcedures(): Observable<Array<ProcedureItem>> {
    console.log('Bearer '+localStorage.getItem('token'));
    return this.http.get<Array<ProcedureItem>>(`${environment.apiUrl}/webapp/api/v1/solicitud/`, {headers:this.httpOptions})
      .pipe();
  }
  getProcedureDetail(id: number): Observable<ProcedureDetail> {
    return this.http.get<ProcedureDetail>(`${environment.apiUrl}/common/api/v1/solicitud/${id}`,{headers:this.httpOptions})
      .pipe();
  }



}
