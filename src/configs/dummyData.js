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

  const cryptoListData = [
    { "id": "bitcoin", "symbol": "BTC", "name": "Bitcoin" },
    { "id": "ethereum", "symbol": "ETH", "name": "Ethereum" },
    { "id": "ripple", "symbol": "XRP", "name": "Ripple" },
    { "id": "litecoin", "symbol": "LTC", "name": "Litecoin" },
    { "id": "cardano", "symbol": "ADA", "name": "Cardano" },
    { "id": "polkadot", "symbol": "DOT", "name": "Polkadot" },
    { "id": "chainlink", "symbol": "LINK", "name": "Chainlink" },
    { "id": "stellar", "symbol": "XLM", "name": "Stellar" },
    { "id": "dogecoin", "symbol": "DOGE", "name": "Dogecoin" },
    { "id": "uniswap", "symbol": "UNI", "name": "Uniswap" }
  ];

  const stockListData = [
    { "id": "apple", "symbol": "AAPL", "name": "Apple Inc." },
    { "id": "microsoft", "symbol": "MSFT", "name": "Microsoft Corp." },
    { "id": "alphabet", "symbol": "GOOGL", "name": "Alphabet Inc." },
    { "id": "amazon", "symbol": "AMZN", "name": "Amazon.com Inc." },
    { "id": "tesla", "symbol": "TSLA", "name": "Tesla Inc." },
    { "id": "meta", "symbol": "META", "name": "Meta Platforms Inc." },
    { "id": "nvidia", "symbol": "NVDA", "name": "NVIDIA Corporation" },
    { "id": "netflix", "symbol": "NFLX", "name": "Netflix Inc." },
    { "id": "intel", "symbol": "INTC", "name": "Intel Corporation" },
    { "id": "ibm", "symbol": "IBM", "name": "IBM Corporation" }
  ];

  const weekData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const assetInitData = {
    id: '',
    type: 'Crypto',
    name: '',
    price: '',
    quantity: '',
    dateOfPurchase: '',
    percentageChange: 0,
  }



export {
  UserDashboardData,
  cryptoListData,
  stockListData,
  weekData,
  assetInitData
}