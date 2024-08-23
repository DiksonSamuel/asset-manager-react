import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const PortfolioChart = ({ data }) => {


  const chartData = {
    labels: data.portfolio.assets.map(asset => asset.name),
    datasets: [
      {
        data: data.portfolio.assets.map(asset => asset.value),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PortfolioChart;
