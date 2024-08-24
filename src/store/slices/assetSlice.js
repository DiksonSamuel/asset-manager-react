import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  assets: [],
  cryptoList: [],
  stockList: [],
};

// Create slice
export const assetsSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    addAsset: (state, action) => {
      state.assets.push(action.payload);
    },
    editAsset: (state, action) => {
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
  },
});

// Actions
export const { addAsset, editAsset, deleteAsset, setAssets, setCryptoList, setStockList } = assetsSlice.actions;

// Thunks
export const fetchCryptoList = () => async dispatch => {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
  dispatch(setCryptoList(response.data));
};

export const fetchStockList = () => async dispatch => {
  const response = await axios.get(`https://www.alphavantage.co/query`, {
    params: {
      function: 'LISTING_STATUS',
      apikey: 'YOUR_API_KEY',
    },
  });
  dispatch(setStockList(response.data.data));
};

export default assetsSlice.reducer;
