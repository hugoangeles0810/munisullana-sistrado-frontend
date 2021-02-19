import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {ProcedureItem } from 'src/app/model/procedure-item';
import { ProcedureDetail } from './model/procedure-detail';
import { ObservarTramiteRequest } from './model/request/observar-tramite.request';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private http: HttpClient) { }

  getPendingProcedures(): Observable<Array<ProcedureItem>> {
    return this.http.get<Array<ProcedureItem>>(`${environment.apiUrl}/backoffice/api/v1/solicitud`)
      .pipe();
  }

  getProcedureDetail(id: number): Observable<ProcedureDetail> {
    return this.http.get<ProcedureDetail>(`${environment.apiUrl}/common/api/v1/solicitud/${id}`)
      .pipe();
  }

  observarTramite(request: ObservarTramiteRequest): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/backoffice/api/v1/solicitud/observar`, request)
      .pipe();
  }
}
