"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MIN_TAGS_PER_PAGE } from "@/constants";
import { useCurrentSerchParams, useSortTags } from "@/hooks";

export const TagsLimitOptions = () => {
  const { onSortTypeChange } = useSortTags();
  const {
    currentSearchParams: { limit },
  } = useCurrentSerchParams();

  const selectDefaultValue = limit ?? `${MIN_TAGS_PER_PAGE}`;

  const handleOnValueChange = (value: string) =>
    onSortTypeChange("limit", value);

  return (
    <Select
      defaultValue={selectDefaultValue}
      onValueChange={handleOnValueChange}
    >
      <SelectTrigger className="w-[125px]">
        <h4 className="pr-1 font-semibold">Show:</h4> <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="30">30</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
