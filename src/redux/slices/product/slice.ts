import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product, ProductSliceState, Status } from "./types";

export const fetchProducts = createAsyncThunk<
  Product[],
  Record<string, string>
>(
  "product/fetchProductStatus",
  async ({ currentPage, category, sortBy, search }) => {
    const { data } = await axios.get<Product[]>(
      `https://62aca39d402135c7acb6030c.mockapi.io/items?page=${currentPage}&limit=4&${category}&${sortBy}&${search}`
    );
    return data;
  }
);

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending.type]: (state) => {
      state.status = Status.LOADING;
      state.items = [];
    },
    [fetchProducts.fulfilled.type]: (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    },

    [fetchProducts.rejected.type]: (state) => {
      state.status = Status.ERROR;
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = productSlice.actions;

export default productSlice.reducer;
