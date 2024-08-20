import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./slices";

const store = configureStore({
  reducer: AppReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;