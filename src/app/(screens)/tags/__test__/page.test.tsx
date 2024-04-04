import { render, screen, within } from "@testing-library/react";
import { useGetTagsQuery } from "@/lib/services/api/tags";
import { useSearchParams } from "next/navigation";
import { tagsDataMock } from "./mockData";
import Page from "../page";

const titleText = "Stackoverflow tags";
const descriptionText = "Table of tags with the number of related questions.";

const searchParamsProps = {
  page: "1",
  limit: "5",
  sort: "popular",
  order: "desc",
};

jest.mock("@/lib/services/api/tags", () => {
  const originalModule = jest.requireActual("@/lib/services/api/tags");
  return {
    ...originalModule,
    useGetTagsQuery: jest.fn(),
  };
});

const useGetTagsQueryMock = useGetTagsQuery as jest.Mock;
const useSearchParamsMock = useSearchParams as jest.Mock;

describe("Tags Page", () => {
  beforeEach(() => {
    useSearchParamsMock.mockImplementation(
      () => new URLSearchParams({ ...searchParamsProps }),
    ),
      useGetTagsQueryMock.mockReturnValue({ data: { ...tagsDataMock } });
  });

  it("renders title", () => {
    render(<Page searchParams={searchParamsProps} />);

    const title = screen.getByText(titleText);
    expect(title).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<Page searchParams={searchParamsProps} />);

    const description = screen.getByText(descriptionText);
    expect(description).toBeInTheDocument();
  });

  it("renders limit options", () => {
    render(<Page searchParams={searchParamsProps} />);

    const limitOptions = screen.getAllByRole("combobox")[0];
    expect(within(limitOptions).getByText("5")).toBeInTheDocument();
  });

  it("renders sort options", () => {
    render(<Page searchParams={searchParamsProps} />);

    const sortOptions = screen.getByText("Popular");
    expect(sortOptions).toBeInTheDocument();
  });
});
