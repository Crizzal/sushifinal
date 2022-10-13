import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
