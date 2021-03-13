import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardMetrics } from './model/dasboard-metrics';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getMetrics(): Observable<DashboardMetrics> {
    return this.http.get<DashboardMetrics>(`${environment.apiUrl}/backoffice/api/v1/dashboard/metrics`)
      .pipe();
  }
}
