"use client";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { useSortTags } from "@/hooks/useSortTags";
import { Button } from "@/components/ui/button";
import { useCurrentSerchParams } from "@/hooks";
import { DEFAULT_ORDER } from "@/constants";

export const SortOrderButton = () => {
  const { onSortTypeChange } = useSortTags();
  const {
    currentSearchParams: { order },
  } = useCurrentSerchParams();

  const isOrderDescending = order !== "asc";

  const sortToggle = () => {
    const currentOrder = isOrderDescending ? "asc" : DEFAULT_ORDER;
    onSortTypeChange("order", currentOrder);
  };

  return (
    <Button variant="outline" className="text-purple-800" onClick={sortToggle}>
      {isOrderDescending ? <ArrowDownWideNarrow /> : <ArrowUpNarrowWide />}
    </Button>
  );
};
