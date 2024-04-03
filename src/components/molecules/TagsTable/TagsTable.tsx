"use client";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DEFAULT_ORDER, DEFAULT_SORT, MIN_TAGS_PER_PAGE } from "@/constants";
import { isFetchBaseError } from "@/helpers";
import { useGetTagsQuery } from "@/lib/services/api/tags";
import { ErrorDataType, SearchParamsSortType, TagType } from "@/types";
import { ErrorDialog } from "../ErrorDialog";
import { TagsPagination } from "../TagsPagination";

interface TagsTable {
  searchParams: SearchParamsSortType;
}

export const TagsTable = ({ searchParams }: TagsTable) => {
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || MIN_TAGS_PER_PAGE;
  const order = searchParams?.order || DEFAULT_ORDER;
  const sort = searchParams?.sort || DEFAULT_SORT;

  const { data, error, isLoading } = useGetTagsQuery({
    page,
    limit,
    order,
    sort,
  });

  const renderSkeleton = (
    <div className="min-w-full">
      <Skeleton className="h-[72px] rounded-none" />
      <div className="space-y-4 pt-10">
        {[...Array(limit).keys()].map((item, index) => (
          <Skeleton key={`${item}-${index}`} className="h-10" />
        ))}
      </div>
    </div>
  );

  if (isLoading) {
    return renderSkeleton;
  }

  if (isFetchBaseError(error)) {
    if (error.data) {
      return <ErrorDialog errorData={error.data as ErrorDataType} />;
    }
    return <ErrorDialog />;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tag name</TableHead>
            <TableHead className="text-right">Questions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.items.map((tag: TagType) => {
            return (
              <TableRow key={tag.name}>
                <TableCell>
                  <div className="font-semibold">{tag.name}</div>
                </TableCell>
                <TableCell className="text-right">{tag.count}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {data?.total && (
        <TagsPagination
          searchParams={searchParams}
          pageSize={limit}
          currentPage={page}
          tagsTotalNumber={data.total}
          hasMore={data?.has_more}
        />
      )}
    </>
  );
};
