export type CartItemType = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  size: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}

export interface CartProductRemove {
  id: number;
  size: number;
}
