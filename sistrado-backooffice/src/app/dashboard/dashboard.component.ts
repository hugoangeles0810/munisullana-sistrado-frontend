import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardMetrics } from '../model/dasboard-metrics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  metrics: DashboardMetrics = null;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getMetrics();
  }

  getMetrics() {
    this.dashboardService.getMetrics().subscribe(
      (result) => {
        this.metrics = result;
      }
    );
  }

}
