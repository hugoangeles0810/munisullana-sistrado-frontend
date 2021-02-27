import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TramiteDetailResponse } from '../model/response/tramite-detail.response';

@Injectable({
  providedIn: 'root'
})
export class GetTramiteDetailService {

  constructor(private http: HttpClient) { }

  getTramiteDetail(id: string): Observable<TramiteDetailResponse> {
    return this.http.get<TramiteDetailResponse>(`${environment.apiUrl}/common/api/v1/tramite/${id}`).pipe();
  }
}
