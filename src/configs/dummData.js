const UserDashboardData = {
  userId: 12345,
  username: "JohnDoe",
  portfolio: {
    totalValue: 100000,
    assets: [
      { name: "Bitcoin", value: 50000, percentageChange: 5 },
      { name: "Ethereum", value: 30000, percentageChange: -3 },
      { name: "Litecoin", value: 15000, percentageChange: 2 },
      { name: "Ripple", value: 5000, percentageChange: -1 },
    ],
  },
  activity: {
    weeklyTransactions: [50, 75, 30, 90, 40, 80, 100],
    monthlyPerformance: [1000, 3000, 2500, 4000, 4500],
  },
  allocation: {
    categories: [
      { name: "Cryptocurrency", value: 70000 },
      { name: "Stocks", value: 20000 },
      { name: "Bonds", value: 10000 },
    ],
  },
  history: {
    dates: ["2024-01", "2024-02", "2024-03", "2024-04"],
    values: [85000, 90000, 95000, 100000],
  },
};


export {
  UserDashboardData
}