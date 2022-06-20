import { CartItemType } from "../redux/slices/cart/types";

export const getCartDataFromLS = (): {
  items: CartItemType[];
  totalPrice: number;
} => {
  const totalPrice = JSON.parse(localStorage.getItem("totalPrice") || "0");
  const items = JSON.parse(localStorage.getItem("cart") || "[]");
  return { items, totalPrice };
};
