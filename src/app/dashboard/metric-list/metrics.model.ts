export interface MetricsResponse {
  data: MetricData[];
  title: string;
}

export interface MetricData {
  clicks: number;
  conversions: number;
  cost: number;
  impressions: number;
  timestamp: string;
}

export interface ChartConfig {
  borderColor: string;
  key: string;
  label: string;
}

export interface ChartDataset {
  borderColor: string;
  chartLabels: string[];
  data: number[];
  fill: boolean;
  label: string;
}

export interface MetricsChartsInfo {
  datasets: ChartDataset[];
  title: string;
}

export type MetricValues = Omit<MetricData, "timestamp">
