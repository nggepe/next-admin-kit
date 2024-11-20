"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { SideNavState } from "../constants/SideNavStateIcon";

export interface LayoutContextProps {
  sideNavState: SideNavState;
  toggleSideNavState: () => void;
}

export const LayoutContext = createContext<LayoutContextProps>({
  sideNavState: "large",
  toggleSideNavState: () => {}
});

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideNavState, setSideNavState] = useState<SideNavState>("large");

  const toggleSideNavState = () => {
    if (sideNavState === "mini") setSideNavState("large");
    if (sideNavState === "large") setSideNavState("mini");
    if (sideNavState === "mobile-hide") setSideNavState("mobile-show");
    if (sideNavState === "mobile-show") setSideNavState("mobile-hide");
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    if (mediaQuery.matches) {
      setSideNavState("large");
    } else {
      setSideNavState("mobile-hide");
    }

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setSideNavState("large");
      } else {
        setSideNavState("mobile-hide");
      }
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return <LayoutContext.Provider value={{ sideNavState, toggleSideNavState }}>{children}</LayoutContext.Provider>;
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
};
