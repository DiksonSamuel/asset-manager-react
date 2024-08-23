import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const HistoryChart = ({ data }) => {
  const chartData = {
    labels: data.history.dates,
    datasets: [
      {
        label: 'Portfolio Value',
        data: data.history.values,
        fill: false,
        borderColor: '#742774',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default HistoryChart;
