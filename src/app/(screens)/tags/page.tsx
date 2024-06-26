import StoreProvider from "@/app/providers/StoreProvider";
import {
  SortOptions,
  SortOrderButton,
  TagsLimitOptions,
  TableWrapper,
  TagsTable,
  Search,
} from "@/components/molecules";
import { SearchParamsSortType } from "@/types";

export default function Tags({
  searchParams,
}: {
  searchParams: SearchParamsSortType;
}) {
  return (
    <div className="min-w-full lg:min-w-[820px]">
      <div className="flex justify-between py-4">
        <div className="flex items-center gap-2">
          <TagsLimitOptions />
          <Search search={searchParams.search} />
        </div>
        <div className="flex items-center gap-2">
          <SortOrderButton />
          <SortOptions />
        </div>
      </div>
      <TableWrapper>
        <StoreProvider>
          <TagsTable searchParams={searchParams} />
        </StoreProvider>
      </TableWrapper>
    </div>
  );
}
