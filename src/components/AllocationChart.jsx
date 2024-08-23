import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const AllocationChart = ({ data }) => {
  const chartData = {
    labels: data.allocation.categories.map(category => category.name),
    datasets: [
      {
        data: data.allocation.categories.map(category => category.value),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default AllocationChart;
