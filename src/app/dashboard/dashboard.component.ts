import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MetricsChartsInfo} from './metric-list/metrics.model';
import {MetricsService} from './metric-list/metrics.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MetricListComponent} from './metric-list/metric-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatCardModule, AsyncPipe, MatProgressSpinnerModule, MetricListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  private metricsService = inject(MetricsService);
  metricsInfo$: Observable<MetricsChartsInfo| null> = this.metricsService.metricsInfo;

  ngOnInit(): void {
    this.metricsService.getMetrics();
  }
}
