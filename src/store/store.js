import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";
import userSlice from "./slice/userSlice";

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
