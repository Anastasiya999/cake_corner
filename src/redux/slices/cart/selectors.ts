import { RootState } from "../../store";

export const selectCartData = (state: RootState) => state.cart;
export const selectCartById = (id: number) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);
