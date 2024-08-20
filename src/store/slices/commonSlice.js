import { createSlice } from "@reduxjs/toolkit";
import initialRootState from "../initialRootState";

const initialState = initialRootState.common;

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {

  },
  extraReducers: (builder) => {

  }
})

export const {

} = commonSlice.actions;

export default commonSlice.reducer;