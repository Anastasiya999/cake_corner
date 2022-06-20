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
export interface ProductSliceState {
  status: Status;
  items: Product[];
}
