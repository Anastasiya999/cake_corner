export const getCartDataFromLS = () => {
  const totalPrice = JSON.parse(localStorage.getItem("totalPrice") || "0");
  const items = JSON.parse(localStorage.getItem("cart") || "[]");
  return { items, totalPrice };
};
