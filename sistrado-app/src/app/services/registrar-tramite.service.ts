import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegistrarTramiteRequest } from '../model/request/registrar-tramite.request';

@Injectable({
  providedIn: 'root'
})
export class RegistrarTramiteService {

  constructor(private http: HttpClient) { }


  registrarTramite(request: RegistrarTramiteRequest): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/webapp/api/v1/solicitud`, request).pipe();
  }
}
