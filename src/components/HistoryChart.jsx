import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import colors from '../utils/colors';
import Strings from '../utils/strings';

Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const HistoryChart = ({ data }) => {
  const chartData = {
    labels: data.history.dates,
    datasets: [
      {
        label: Strings.portfolioValue,
        data: data.history.values,
        fill: false,
        borderColor: colors['chart-dark-rose'],
      },
    ],
  };

  return <Line data={chartData} />;
};

export default HistoryChart;
