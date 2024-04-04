import { API_TAGS_FILTER } from "@/constants";
import { RootState } from "@/lib/services/store";
import { GetTagsApiArgs, GetTagsApiResponse } from "@/types";
import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const api = createApi({
  reducerPath: "tagsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.stackexchange.com/2.3" }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getTags: build.query<GetTagsApiResponse, GetTagsApiArgs>({
      query: (queryArg) => {
        const search = queryArg.search ? `&inname=${queryArg.search}` : "";
        // Default filter to get tags with count and name fields only + tags total count
        const defaultfilter = API_TAGS_FILTER.NAME_COUNT_TOTAL;
        return {
          url: `/tags?page=${queryArg.page}&pagesize=${queryArg.limit}&order=${queryArg.order}&sort=${queryArg.sort}${search}&site=stackoverflow&filter=${defaultfilter}`,
        };
      },
    }),
  }),
});

export const { useGetTagsQuery } = api;
