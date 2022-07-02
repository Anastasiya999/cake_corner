import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartDataFromLS } from "../../../utils/getCartDataFromLS";

import { CartItemType, CartProductRemove } from "../cart/types";
import { CartSliceState } from "./types";

const cartData = getCartDataFromLS();

const initialState: CartSliceState = {
  items: cartData.items,
  totalPrice: cartData.totalPrice,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
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
    minusItem: (state, action: PayloadAction<CartProductRemove>) => {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;

        if (findItem.count == 0) {
          state.items = state.items.filter((item) => item.count != 0);
        }
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
