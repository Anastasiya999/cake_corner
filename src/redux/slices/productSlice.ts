import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

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

interface ProductSliceState {
  status: Status;
  items: Product[];
}

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
export const selectProductData = (state: RootState) => state.product;

export default productSlice.reducer;
