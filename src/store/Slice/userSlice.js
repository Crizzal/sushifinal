import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    admin: JSON.parse(localStorage.getItem("user")) || {},
  },
  reducers: {
    setAdmin: (state, action) => {
      window.localStorage.setItem("user", JSON.stringify(action.payload));
      state.admin = action.payload;
    },
  },
});

export const { setAdmin } = userSlice.actions;

export default userSlice.reducer;
