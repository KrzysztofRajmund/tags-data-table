import StoreProvider from "@/app/providers/StoreProvider";
import { TableWrapper, TagsTable } from "@/components/molecules";
import { SearchParamsType } from "@/types";

export default async function Tags({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  return (
    <div className="min-w-full lg:min-w-[820px]">
      <div className="flex justify-between py-4">
        <h2>Tags limit</h2>
        <div className="flex items-center gap-2">
          <h2>Sort button</h2>
          <h2>Sort options</h2>
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
