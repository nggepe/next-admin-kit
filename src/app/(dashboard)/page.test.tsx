import { render, screen } from "@testing-library/react";
import Home from "./page";
import DashboardLayout from "./layout";
import MatchMediaMock from "vitest-matchmedia-mock";

describe("test route /", () => {
  let matchMedia: MatchMediaMock;
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  it("should render the page", () => {
    matchMedia.useMediaQuery("(min-width: 1200px)");
    render(
      <DashboardLayout>
        <Home />
      </DashboardLayout>
    );
    expect(screen.getAllByText("Your Target").length > 0).toBeTruthy();
  });
});
