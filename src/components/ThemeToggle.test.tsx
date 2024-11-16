import { fireEvent, render, screen } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import { Mock } from "vitest";

vi.mock("next-themes", () => ({
  useTheme: vi.fn()
}));

describe("ThemeToggle", () => {
  it("should dark renders", () => {
    (useTheme as Mock).mockReturnValue({ theme: "dark" });

    render(<ThemeToggle />);
    const toggle = screen.getByLabelText("ThemeToggle");
    expect(toggle).toBeInTheDocument();
    const icon = screen.getByLabelText("Theme is dark");
    expect(icon).toBeInTheDocument();
  });

  it("should light renders", () => {
    (useTheme as Mock).mockReturnValue({ theme: "light" });

    render(<ThemeToggle />);
    const toggle = screen.getByLabelText("ThemeToggle");
    expect(toggle).toBeInTheDocument();
    const icon = screen.getByLabelText("Theme is light");
    expect(icon).toBeInTheDocument();
  });

  it("should change theme to dark", async () => {
    const setTheme = vi.fn();
    (useTheme as Mock).mockReturnValue({ theme: "light", setTheme });

    render(<ThemeToggle />);
    const toggle = screen.getByLabelText("ThemeToggle");
    expect(toggle).toBeInTheDocument();
    const icon = screen.getByLabelText("Theme is light");
    expect(icon).toBeInTheDocument();

    await fireEvent.click(toggle);
    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("should change theme to light", async () => {
    const setTheme = vi.fn();
    (useTheme as Mock).mockReturnValue({ theme: "dark", setTheme });

    render(<ThemeToggle />);
    const toggle = screen.getByLabelText("ThemeToggle");
    expect(toggle).toBeInTheDocument();
    const icon = screen.getByLabelText("Theme is dark");
    expect(icon).toBeInTheDocument();

    await fireEvent.click(toggle);
    expect(setTheme).toHaveBeenCalledWith("light");
  });
});
