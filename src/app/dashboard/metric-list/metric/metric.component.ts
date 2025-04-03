import {Component, input, signal} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {ChartDataset} from '../metrics.model';
import {ChartOptions, ChartType} from 'chart.js';
import {CHART_OPTIONS, LINE_CHART_TYPE} from '../metrics.config';

@Component({
  selector: 'app-metric',
  imports: [
    BaseChartDirective,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle
  ],
  templateUrl: './metric.component.html',
  styleUrl: './metric.component.scss'
})
export class MetricComponent {
  metricData = input<ChartDataset>();

  lineChartType = signal<ChartType>(LINE_CHART_TYPE);
  chartOptions = signal<ChartOptions>(CHART_OPTIONS);
}
