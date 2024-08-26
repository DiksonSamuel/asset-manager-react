import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import initialRootState from '../initialRootState';

const initialState = initialRootState.asset

export const calculatePercentageChangeForAssets = createAsyncThunk(
  'asset/calculatePercentageChangeForAssets',
  async (assets, { dispatch }) => {
    const updatedAssets = await Promise.all(assets.map(async (asset) => {
      let latestPrice;

      if (asset.type === 'Crypto') {
        latestPrice = await fetchCryptoPrice(asset.name);
      } else if (asset.type === 'Stocks') {
        latestPrice = await fetchStockPrice(asset.name);
      }

      const percentageChange = ((latestPrice - asset.price) / asset.price) * 100;
      return {
        ...asset,
        percentageChange: percentageChange.toFixed(2)
      };
    }));

    dispatch(updateAsset(updatedAssets));
  }
);

export const fetchCryptoPrice = async (cryptoId) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
  return response.data[cryptoId].usd;
};

export const fetchStockPrice = async (stockSymbol) => {
  const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&apikey=EZE4QZQR74GKMPKD`);
  return response.data.price;
};


export const assetsSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    addAsset: (state, action) => {
      state.assets.push(action.payload);
    },
    editAsset: (state, action) => {
      alert(JSON.stringify(action.payload))
      const index = state.assets.findIndex(asset => asset.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = action.payload;
      }
    },
    deleteAsset: (state, action) => {
      state.assets = state.assets.filter(asset => asset.id !== action.payload);
    },
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
    setCryptoList: (state, action) => {
      state.cryptoList = action.payload;
    },
    setStockList: (state, action) => {
      state.stockList = action.payload;
    },
    updateAsset: (state, action) => {
      action.payload.forEach(updatedAsset => {
        const index = state.assets.findIndex(asset => asset.id === updatedAsset.id);

        if (index !== -1) {
          state.assets[index] = updatedAsset;
        }
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(calculatePercentageChangeForAssets.pending, (state) => {
        state.calculatePercentageLoader = true;
      })
      .addCase(calculatePercentageChangeForAssets.fulfilled, (state) => {
        state.calculatePercentageLoader = false;
      })
      .addCase(calculatePercentageChangeForAssets.rejected, (state) => {
        state.calculatePercentageLoader = false;
      })
  }
});

// Actions
export const { addAsset, editAsset, deleteAsset, setAssets, setCryptoList, setStockList, updateAsset } = assetsSlice.actions;

export default assetsSlice.reducer;
