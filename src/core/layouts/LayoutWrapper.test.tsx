import { render, screen } from "@testing-library/react";
import LayoutWrapper from "./LayoutWrapper";
import MatchMediaMock from "vitest-matchmedia-mock";

describe("LayoutWrapper", () => {
  const mediaQuery = new MatchMediaMock();
  it("should render children", () => {
    mediaQuery.useMediaQuery("(min-width: 1024px)");
    render(
      <LayoutWrapper>
        <span>It is children</span>
      </LayoutWrapper>
    );

    expect(screen.getByText("It is children")).toBeInTheDocument();
  });
});
