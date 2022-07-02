import { RootState } from "../../store";

export const selectCartData = (state: RootState) => state.cart;
export const selectCartById = (id: number) => (state: RootState) =>
  state.cart.items.filter((item) => item.id === id);
