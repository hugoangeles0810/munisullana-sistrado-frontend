import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubsanarTramiteRequest } from '../model/request/subsanar-procedure.request';

@Injectable({
  providedIn: 'root'
})
export class UpdateProcedureService {

  constructor(private http: HttpClient) { }

  subsanarTramite(request: SubsanarTramiteRequest): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/webapp/api/v1/solicitud`, request).pipe();
  }
}
