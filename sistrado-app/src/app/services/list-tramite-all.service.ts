import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListTramiteAllService {

  constructor(private http: HttpClient) { 
  }

  list_procedures_all(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/common/api/v1/tramite/`)
      .pipe();
  }
}
