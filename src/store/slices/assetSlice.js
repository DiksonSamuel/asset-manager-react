import { createSlice } from "@reduxjs/toolkit";
import initialRootState from "../initialRootState";

const initialState = initialRootState.asset;

const assetSlice = createSlice({
  name: 'asset',
  initialState: initialState,
  reducers: {

  },
  extraReducers: (builder) => {

  }
})

export default assetSlice.reducer;