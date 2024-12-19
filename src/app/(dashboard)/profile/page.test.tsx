import { render, screen } from "@testing-library/react";
import ProfilePage from "./page";
import MatchMediaMock from "vitest-matchmedia-mock";

describe("profile page", () => {
  let matchmedia: MatchMediaMock;
  beforeAll(() => {
    matchmedia = new MatchMediaMock();
  });
  it("just render page", () => {
    matchmedia.useMediaQuery("(min-width: 1024px)");
    render(<ProfilePage />);
    expect(screen.getByText(/gilang pratama/i)).toBeInTheDocument();
  });
});
