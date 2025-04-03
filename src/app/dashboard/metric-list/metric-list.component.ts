import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MetricComponent} from "./metric/metric.component";
import {ChartDataset} from './metrics.model';

@Component({
  selector: 'app-metric-list',
  imports: [MetricComponent],
  templateUrl: './metric-list.component.html',
  styleUrl: './metric-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricListComponent {
  metricsData = input<ChartDataset[]>([]);
}
