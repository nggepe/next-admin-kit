import { fireEvent, render, screen } from "@testing-library/react";
import { useLayoutContext } from "@/core/context/LayoutContext";
import { Mock } from "vitest";
import SideNav from "./SideNav";

vi.mock("@/core/context/LayoutContext", () => ({
  useLayoutContext: vi.fn()
}));

describe("SideNav", () => {
  it("should run toggle method", async () => {
    const toggleSideNavState = vi.fn();
    (useLayoutContext as Mock).mockReturnValue({
      sideNavState: "mini",
      toggleSideNavState: toggleSideNavState
    });
    render(<SideNav />);
    const btn = screen.getByLabelText("Toggle Side Nav");
    expect(btn).toBeInTheDocument();

    await fireEvent.click(btn);
    expect(toggleSideNavState).toHaveBeenCalled();
  });
});
