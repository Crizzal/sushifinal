import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../Api/product";

export const fetchProducts = createAsyncThunk(
  "product/getProducts",
  async (params, { state }) => {
    console.log(123);
    try {
      console.log("fetchProducts", state);
      const response = await ProductApi.getProducts(
        params || state?.productFilter || {}
      );
      console.log("fetchProducts", response);
      return response.data;
    } catch (error) {}
  }
);

export const fetchAllProducts = createAsyncThunk("product/getAll", async () => {
  try {
    const response = await ProductApi.getAll();
    return response.data;
  } catch (error) {}
});

export const fetchProductTypes = createAsyncThunk(
  "product/getTypes",
  async () => {
    try {
      const response = await ProductApi.getProductTypes();
      return response.data;
    } catch (error) {}
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    productTypes: {},
    productFilter: {
      page: 1,
      size: 12,
    },
  },
  reducers: {
    setProductFilter: (state, action) => {
      state.productFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = { ...action.payload };
    });
    builder.addCase(fetchProductTypes.fulfilled, (state, action) => {
      state.productTypes = { ...action.payload };
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = { ...action.payload };
    });
  },
});

export const { setProductFilter } = productSlice.actions;

export default productSlice.reducer;