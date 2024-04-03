import { GetTagsApiArgs } from "./tags";

export type SortType = keyof GetTagsApiArgs;

export type SearchParamsSortType = {
  [key in SortType]: string | undefined;
};
