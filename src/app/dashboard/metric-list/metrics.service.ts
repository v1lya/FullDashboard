import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, filter, Observable} from 'rxjs';
import {MetricsChartsInfo, ChartDataset, MetricData, MetricsResponse, MetricValues} from './metrics.model';
import {DATASET_CONFIG} from './metrics.config';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MetricsService {
  private http = inject(HttpClient);
  private datePipe = inject(DatePipe);

  private metricsInfo$: BehaviorSubject<MetricsChartsInfo | null> = new BehaviorSubject<MetricsChartsInfo | null>(null);
  metricsInfo: Observable<MetricsChartsInfo | null> = this.metricsInfo$.asObservable();

  getMetrics() {
    this.metricsInfo$.next(null);
    this.fetchMetrics()
      .pipe(filter((metricsResponse) => !!metricsResponse))
      .subscribe({
        next: (metricsResponse) => {
          setTimeout(() => {
            const metricsDatasets = this.getMetricsDatasets(metricsResponse.data);
            const metricsInfo: MetricsChartsInfo = {
              datasets: [ ...metricsDatasets ],
              title: metricsResponse.title,
            };
            this.metricsInfo$.next(metricsInfo);
          }, 2000);
          },
        error: () => {
          this.metricsInfo$.next(null);
        },
    });
  }

  private fetchMetrics(): Observable<MetricsResponse> {
    return this.http.get<MetricsResponse>("/assets/sample.json");
  }

  private getMetricsDatasets(metricsData: MetricData[]): ChartDataset[] {
    return DATASET_CONFIG.map(({ key, label, borderColor }) => {
      const values: number[] = [];
      const labels: string[] = [];

      metricsData.forEach((item: MetricData) => {
        const metricValue: number = item[key as keyof MetricValues];
        const metricLabel: string = this.datePipe.transform(item?.timestamp, 'MMM d, y') as string;
        values.push(metricValue);
        labels.push(metricLabel);
      });

      const chartLabelsValues = [...labels];
      const dataValues = [...values];

      return {
        borderColor,
        chartLabels: chartLabelsValues,
        data: dataValues,
        fill: false,
        label,
      };
    });
  }
}
