import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItemType = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  size: number;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count += 1;
        state.totalPrice += findItem.price;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });

        state.totalPrice += action.payload.price;
      }
    },
    minusItem: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
        if (findItem.count == 0) {
          state.items = state.items.filter((item) => item.id != action.payload);
        }
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export const selectCartData = (state: RootState) => state.cart;
export const selectCartById = (id: number) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);

export default cartSlice.reducer;
