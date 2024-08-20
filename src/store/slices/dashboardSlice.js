import { createSlice } from "@reduxjs/toolkit";
import initialRootState from "../initialRootState";

const initialState = initialRootState.dashboad;

const dashboadSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {

  },
  extraReducers: (builder) => {

  }
})

export default dashboadSlice.reducer;