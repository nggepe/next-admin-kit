import { render, screen } from "@testing-library/react";
import SideNavLogo from "./SideNavLogo";
import { useTheme } from "next-themes";
import { Mock } from "vitest";

describe("SideNavLogo", () => {
  vi.mock("next-themes", () => ({
    useTheme: vi.fn()
  }));
  it("renders the dark logo", () => {
    (useTheme as Mock).mockReturnValue({ theme: "dark" });
    render(<SideNavLogo />);
    const logo = screen.getByAltText("logo landscape");
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute("src")).toBe("/_next/image?url=%2Fimages%2Flogo-landscape-dark.png&w=384&q=75");
  });

  it("renders the light logo", () => {
    (useTheme as Mock).mockReturnValue({ theme: "light" });
    render(<SideNavLogo />);
    const logo = screen.getByAltText("logo landscape");
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute("src")).toBe("/_next/image?url=%2Fimages%2Flogo-landscape-light.png&w=384&q=75");
  });
});
