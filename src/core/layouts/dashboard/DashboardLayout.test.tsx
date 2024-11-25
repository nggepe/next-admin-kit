import { render, screen } from "@testing-library/react";
import DashboardLayout from "./DashboardLayout";
import MatchMediaMock from "vitest-matchmedia-mock";

describe("DashboardLayout", () => {
  const mediaQuery = new MatchMediaMock();
  it("should render children", () => {
    mediaQuery.useMediaQuery("(min-width: 1024px)");
    render(
      <DashboardLayout>
        <span>It is children</span>
      </DashboardLayout>
    );

    expect(screen.getByText("It is children")).toBeInTheDocument();
  });
});
