import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      {
        image:
          "https://sushiway.com.vn/wp-content/uploads/2022/07/Combo-Sashimi-15-10-1-247x296.png",
        name: "Bụng Cá Hồi Áp Chảo",
        quantity: 2,
        price: 59000,
        id: 1,
      },
      {
        image:
          "https://sushiway.com.vn/wp-content/uploads/2022/07/Combo-Sashimi-15-10-1-247x296.png",
        name: "Bụng Cá Hồi Áp Chảo",
        quantity: 2,
        price: 59000,
        id: 2,
      },
      {
        image:
          "https://sushiway.com.vn/wp-content/uploads/2022/07/Combo-Sashimi-15-10-1-247x296.png",
        name: "Bụng Cá Hồi Áp Chảo",
        quantity: 2,
        price: 59000,
        id: 3,
      },
      {
        image:
          "https://sushiway.com.vn/wp-content/uploads/2022/07/Combo-Sashimi-15-10-1-247x296.png",
        name: "Bụng Cá Hồi Áp Chảo",
        quantity: 2,
        price: 59000,
        id: 4,
      },
      {
        image:
          "https://sushiway.com.vn/wp-content/uploads/2022/07/Combo-Sashimi-15-10-1-247x296.png",
        name: "Bụng Cá Hồi Áp Chảo",
        quantity: 2,
        price: 59000,
        id: 5,
      },
      {
        image:
          "https://sushiway.com.vn/wp-content/uploads/2022/07/Combo-Sashimi-15-10-1-247x296.png",
        name: "Bụng Cá Hồi Áp Chảo",
        quantity: 2,
        price: 59000,
        id: 6,
      },
      {
        image:
          "https://sushiway.com.vn/wp-content/uploads/2022/07/Combo-Sashimi-15-10-1-247x296.png",
        name: "Bụng Cá Hồi Áp Chảo",
        quantity: 2,
        price: 59000,
        id: 7,
      },
    ],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    deleteItem: (state, action) => {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = [...newCart];
    },
  },
});

export const { setCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
