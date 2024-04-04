import { SortType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useSortTags = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value.length) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  const onSortTypeChange = (sortType: SortType, sortValue: string) => {
    router.push(pathname + "?" + createQueryString(sortType, sortValue));
  };

  return { onSortTypeChange };
};
