import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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

  list_procedures(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/webapp/api/v1/solicitud/`, {headers:this.httpOptions})
      .pipe();
  }


}
