import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import productModalSlice from "./slice/productModalSlice";
import productSlice from "./slice/productSlice";
import userSlice from "./slice/userSlice";

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
  user: userSlice,
  productModal: productModalSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
