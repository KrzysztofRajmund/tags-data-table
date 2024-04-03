import { getTags } from "@/app/actions";
import { TagsPagination, TagsTable } from "@/components/molecules";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MIN_TAGS_NUMBER_PER_PAGE } from "@/constants";
import { SearchParamsType } from "@/types";

export default async function Tags({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || MIN_TAGS_NUMBER_PER_PAGE;

  const data = await getTags({
    page,
    limit,
    order: "desc",
    sort: "popular",
  });

  return (
    <div className="min-w-full lg:min-w-[820px]">
      <Card>
        <CardHeader>
          <CardTitle>Stackoverflow tags</CardTitle>
          <CardDescription>
            Table of tags with the number of related questions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TagsTable tagsList={data?.items} />
          <TagsPagination
            searchParams={searchParams}
            pageSize={limit}
            currentPage={page}
            tagsTotalNumber={data.total}
            hasMore={data?.has_more}
          />
        </CardContent>
      </Card>
    </div>
  );
}
