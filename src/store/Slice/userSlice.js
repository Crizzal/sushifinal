import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    admin: {},
  },
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const { setAdmin } = userSlice.actions;

export default userSlice.reducer;
