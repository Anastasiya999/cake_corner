import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProductStatus",
  async ({ currentPage, category, sortBy, search }) => {
    const { data } = await axios.get(
      `https://62aca39d402135c7acb6030c.mockapi.io/items?page=${currentPage}&limit=4&${category}&${sortBy}&${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
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
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },

    [fetchProducts.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = productSlice.actions;

export default productSlice.reducer;
