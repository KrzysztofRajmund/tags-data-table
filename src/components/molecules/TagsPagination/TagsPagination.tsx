import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SearchParamsSortType } from "@/types";
import { disableButton } from "@/helpers";
interface TagsPagination {
  searchParams: SearchParamsSortType;
  tagsTotalNumber: number;
  pageSize: number;
  currentPage: number;
  hasMore?: boolean;
}

export const TagsPagination = ({
  searchParams,
  tagsTotalNumber,
  pageSize,
  currentPage,
  hasMore,
}: TagsPagination) => {
  const numberOfPages = Math.ceil(tagsTotalNumber / pageSize);

  const getPagesToShow = () => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage >= numberOfPages - 2) {
      startPage = numberOfPages - 4;
      endPage = numberOfPages;
    }

    const pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );

    return pagesToShow;
  };

  const renderPaginationLinks = () => {
    const pages = getPagesToShow();

    return pages.map((pageNumber) => {
      return (
        <PaginationItem key={pageNumber}>
          <PaginationLink
            isActive={currentPage === pageNumber}
            href={{
              pathname: "/tags",
              query: {
                ...searchParams,
                page: pageNumber,
              },
            }}
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      );
    });
  };

  return (
    <Pagination className="py-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={{
              pathname: "/tags",
              query: {
                ...searchParams,
                page: currentPage - 1,
              },
            }}
            {...disableButton(currentPage === 1)}
            className="font-semibold"
          />
        </PaginationItem>
        {renderPaginationLinks()}
        <PaginationItem>{hasMore && <PaginationEllipsis />}</PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={{
              pathname: "/tags",
              query: {
                ...searchParams,
                page: currentPage + 1,
              },
            }}
            {...disableButton(!hasMore)}
            className="font-semibold"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
