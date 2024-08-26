import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import colors from '../utils/colors';

Chart.register(ArcElement);

const PortfolioChart = ({ data }) => {

  const chartData = {
    labels: data.portfolio.assets.map(asset => asset.name),
    datasets: [
      {
        data: data.portfolio.assets.map(asset => asset.value),
        backgroundColor: [colors['chart-rose'], colors['chart-blue'], colors['chart-yellow'], colors['chart-green']],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PortfolioChart;
