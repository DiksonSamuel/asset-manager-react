import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import colors from '../utils/colors';

const AllocationChart = ({ data }) => {
  const chartData = {
    labels: data.allocation.categories.map(category => category.name),
    datasets: [
      {
        data: data.allocation.categories.map(category => category.value),
        backgroundColor: [colors['chart-rose'], colors['chart-blue'], colors['chart-yellow']],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default AllocationChart;
