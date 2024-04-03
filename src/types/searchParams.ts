export type SortType = "page" | "limit" | "order" | "sort";

export type SearchParamsSortType = {
  [key in SortType]: string | undefined;
};
