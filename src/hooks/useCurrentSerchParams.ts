import { SortType } from "@/types";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useCurrentSerchParams = () => {
  const searchParams = useSearchParams();

  const currentSearchParams = useMemo(() => {
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    const order = searchParams.get("order");
    const sort = searchParams.get("sort");
    const search = searchParams.get("search");

    const existingSearhParams: Record<SortType, string | null> = {
      page,
      limit,
      order,
      sort,
      search,
    };

    return existingSearhParams;
  }, [searchParams]);

  return { currentSearchParams };
};
