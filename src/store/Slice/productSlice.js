import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../Api/product";

export const fetchProducts = createAsyncThunk(
  "product/getProducts",
  async (params, { state }) => {
    try {
      const response = await ProductApi.getProducts(
        params || state?.productFilter || {}
      );
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

      if (response.data.code === 200) {
        return response.data.data;
      }
    } catch (error) {}
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    productTypes: [],
    productFilter: {
      page: 1,
      size: 12,
      priceFrom: 0,
      priceTo: 0,
      filterBy: "price",
      search: "",
      sortBy: "",
      sortDir: "",
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
      state.productTypes = action.payload;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = { ...action.payload };
    });
  },
});

export const { setProductFilter, setOpenModal } = productSlice.actions;

export default productSlice.reducer;
