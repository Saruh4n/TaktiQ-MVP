'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  RadialLinearScale,
} from 'chart.js';
import { Pie, Bar, Line, Radar } from 'react-chartjs-2';

// Chart.js bileşenlerini kaydet
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

// Varsayılan grafik ayarları
const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

interface ChartData {
  type: 'pie' | 'bar' | 'line' | 'radar';
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
      borderWidth?: number;
    }>;
  };
}

interface ChartsRendererProps {
  charts: ChartData[];
}

export function ChartsRenderer({ charts }: ChartsRendererProps) {
  return (
    <div className="space-y-6">
      {charts.map((chart, index) => {
        const options = {
          ...defaultOptions,
          ...(chart.type === 'line' && {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }),
        };

        switch (chart.type) {
          case 'pie':
            return (
              <div key={index} className="h-64">
                <Pie data={chart.data} options={options} />
              </div>
            );
          case 'bar':
            return (
              <div key={index} className="h-64">
                <Bar data={chart.data} options={options} />
              </div>
            );
          case 'line':
            return (
              <div key={index} className="h-64">
                <Line data={chart.data} options={options} />
              </div>
            );
          case 'radar':
            return (
              <div key={index} className="h-64">
                <Radar data={chart.data} options={options} />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
} 