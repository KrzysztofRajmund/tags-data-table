import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

type ErrorType = FetchBaseQueryError | SerializedError | undefined;

export const isFetchBaseError = (
  error?: ErrorType,
): error is FetchBaseQueryError => {
  return !!error && "status" in error;
};
