"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useSortTags } from "@/hooks";
import { useDebounce } from "use-debounce";
import { Search } from "lucide-react";

interface SearchInput {
  search?: string;
}

export const SearchInput = ({ search }: SearchInput) => {
  const [searchText, setSearchText] = useState(search ?? "");
  const [query] = useDebounce(searchText, 750);
  const { onSortTypeChange } = useSortTags();

  useEffect(() => {
    onSortTypeChange("search", query);
  }, [query]);

  return (
    <div className="relative  hidden max-w-[185px] items-center sm:inline-flex">
      <Input
        type="text"
        placeholder="Search tag..."
        className="pr-10"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <Search
        className=" text-brand pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
        size={21}
      />
    </div>
  );
};
