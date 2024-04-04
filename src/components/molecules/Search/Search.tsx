"use client";
import { useEffect, useState } from "react";
import { useSortTags } from "@/hooks";
import { useDebounce } from "use-debounce";
import { SearchInput } from "@/components/ui/search-input";

interface Search {
  search?: string;
}

export const Search = ({ search }: Search) => {
  const [searchText, setSearchText] = useState(search ?? "");
  const [query] = useDebounce(searchText, 650);
  const { onSortTypeChange } = useSortTags();

  useEffect(() => {
    onSortTypeChange("search", query);
  }, [query]);

  return (
    <div className="hidden max-w-[185px] sm:inline-flex">
      <SearchInput
        type="text"
        placeholder="Search tag..."
        className="pr-10"
        withIcon
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};
