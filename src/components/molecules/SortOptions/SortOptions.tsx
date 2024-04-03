"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEFAULT_SORT } from "@/constants";
import { useCurrentSerchParams, useSortTags } from "@/hooks";

export const SortOptions = () => {
  const { onSortTypeChange } = useSortTags();
  const {
    currentSearchParams: { sort },
  } = useCurrentSerchParams();

  const selectDefaultValue = sort ?? DEFAULT_SORT;

  const handleOnValueChange = (value: string) =>
    onSortTypeChange("sort", value);

  return (
    <Select
      defaultValue={selectDefaultValue}
      onValueChange={handleOnValueChange}
    >
      <SelectTrigger className="min-w-[145px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" className="min-w-[145px]">
        <SelectGroup>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectSeparator className="my-1" />
          <SelectItem value="name">Tag name</SelectItem>
          <SelectSeparator className="my-1" />
          <SelectItem value="activity">Last active</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
