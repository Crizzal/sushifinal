import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(window.localStorage.getItem("cart")) || [],
    total: window.localStorage.getItem("cartTotal") || 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newCart = [...state.cart];
      const isExist = newCart.find((item) => item.id === action.payload.id);
      if (isExist?.id) {
        newCart.forEach((item) => {
          if (item.id === action.payload.id) {
            item.quantity = item.quantity + action.payload.quantity;
          }
        });
      } else {
        newCart.push(action.payload);
      }
      state.cart = newCart;
    },
    deleteItem: (state, action) => {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = [...newCart];
    },
    calculateTotal: (state) => {
      const newTotal = state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.total = newTotal;
    },
    syncToLocalStorage: (state) => {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
      window.localStorage.setItem("cartTotal", state.total);
    },
  },
});

export const { addToCart, deleteItem, calculateTotal, syncToLocalStorage } =
  cartSlice.actions;
export default cartSlice.reducer;
