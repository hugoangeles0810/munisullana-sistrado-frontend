import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProcedureDetail } from '../model/response/procedure-detail';

@Injectable({
  providedIn: 'root'
})
export class GetProcedureDetailService {

  constructor(private http: HttpClient) { }

  getProcedureDetail(id: string): Observable<ProcedureDetail> {
    return this.http.get<ProcedureDetail>(`${environment.apiUrl}/common/api/v1/solicitud/${id}`)
      .pipe();
  }
}
