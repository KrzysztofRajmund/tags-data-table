import { render, screen } from "@testing-library/react";
import Page from "../page";

const headerText = "Tags Playground";
const cardTitleText = "Table of topics with the number of related questions.";

describe("Home Page", () => {
  it("renders page heading", () => {
    render(<Page />);

    const header = screen.getByText(headerText);
    expect(header).toBeInTheDocument();
  });

  it("renders card title", () => {
    render(<Page />);

    const cardTitle = screen.getByText(cardTitleText);
    expect(cardTitle).toBeInTheDocument();
  });
});
