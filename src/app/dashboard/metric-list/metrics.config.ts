import {
  CategoryScale,
  Chart,
  ChartOptions,
  ChartType, Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement, Title, Tooltip
} from 'chart.js';
import {ChartConfig} from './metrics.model';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend);

export const LINE_CHART_TYPE: ChartType = 'line';

export const CHART_OPTIONS: ChartOptions = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
      title: {
        display: true,
        text: 'Date'
      }
    },
    y: {
      type: 'linear',
      min: 0,
      title: {
        display: true,
        text: 'Value'
      }
    }
  },
  plugins: {
    tooltip: {
      enabled: true
    },
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 14
        }
      }
    }
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  backgroundColor: 'white',
};

export const DATASET_CONFIG: ChartConfig[] = [
  {
    key: "impressions",
    label: "Impressions",
    borderColor: "blue",
  },
  {
    key: "clicks",
    label: "Clicks",
    borderColor: "green",
  },
  {
    key: "cost",
    label: "Cost",
    borderColor: "orange",
  },
  {
    key: "conversions",
    label: "Conversions",
    borderColor: "red",
  }
];
