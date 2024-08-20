import { combineReducers } from "redux";
import commonSlice from "./commonSlice";
import dashboardSlice from "./dashboardSlice";
import assetSlice from "./assetSlice";

let RootReducer = combineReducers({
  common: commonSlice,
  dashboard: dashboardSlice,
  asset: assetSlice
});

export const AppReducer = (state, action) => {
  if(action.type === 'RESET_STORE') {
    state = undefined;
  }
  return RootReducer(state, action)
}