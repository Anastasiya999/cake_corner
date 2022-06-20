export type SortType = {
  name: string;
  sortProperty: "rating" | "price" | "name";
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: SortType;
  currentPage: number;
}
