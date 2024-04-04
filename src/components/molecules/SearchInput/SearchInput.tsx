"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/search-input";
import { useSortTags } from "@/hooks";
import { useDebounce } from "use-debounce";

interface SearchInput {
  search?: string;
}

export const SearchInput = ({ search }: SearchInput) => {
  const [searchText, setSearchText] = useState(search ?? "");
  const [query] = useDebounce(searchText, 650);
  const { onSortTypeChange } = useSortTags();

  useEffect(() => {
    onSortTypeChange("search", query);
  }, [query]);

  return (
    <div className="hidden max-w-[185px] sm:inline-flex">
      <Input
        type="text"
        placeholder="Search tag..."
        className="pr-10"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};
