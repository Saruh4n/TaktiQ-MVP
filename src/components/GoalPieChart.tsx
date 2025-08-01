'use client';

import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Chart.js bileşenlerini kaydet
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const pieData = {
  labels: ['Sol Ayak', 'Sağ Ayak', 'Kafa'],
  datasets: [
    {
      label: 'Gol Dağılımı',
      data: [8, 5, 2],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      borderColor: ['#fff'],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        font: {
          size: 14
        },
        padding: 20
      }
    },
    title: {
      display: true,
      text: 'Gol Dağılımı',
      font: {
        size: 16,
        weight: 'bold' as const
      },
      padding: {
        top: 10,
        bottom: 20
      }
    }
  }
};

export function GoalPieChart() {
  return (
    <div style={{ height: '300px', width: '100%', position: 'relative' }}>
      <Pie data={pieData} options={options} />
    </div>
  );
} 