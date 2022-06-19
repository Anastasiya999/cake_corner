import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //state.totalPrice += action.payload.price;
      state.totalPrice += action.payload.price;
      //state.items = [...state.items, action.payload];
      //state.items.push(action.payload);

      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    clearItems: (state, action) => {
      state.items.length = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
