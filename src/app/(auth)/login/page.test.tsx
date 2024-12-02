import { render, screen } from "@testing-library/react";
import MatchMediaMock from "vitest-matchmedia-mock";
import AuthLayout from "../layout";
import LoginPage from "./page";

describe("render route /login", () => {
  let matchMedia: MatchMediaMock;
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterAll(() => {
    matchMedia.destroy();
  });

  it("should render /login", () => {
    render(
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    );
    expect(screen.getAllByText("Sign In").length > 0).toBe(true);
  });
});
