import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import colors from '../utils/colors';
import Strings from '../utils/strings';
import { weekData } from '../configs/dummyData';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = ({ data }) => {
  const chartData = {
    labels: weekData,
    datasets: [
      {
        label: Strings.transaction,
        data: data.activity.weeklyTransactions,
        backgroundColor: colors['chart-green'],
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default ActivityChart;
