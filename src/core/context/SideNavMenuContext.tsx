"use client";
import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

export interface SideNavMenuContextProps {
  activePath: string;
  setActivePath: (path: string) => void;
}

export const SideNavMenuContext = createContext<SideNavMenuContextProps>({
  activePath: "",
  setActivePath: () => {}
});

export const SideNavMenuProvider = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
  const [activePath, setActivePath] = useState<string>(pathName);

  return <SideNavMenuContext.Provider value={{ activePath, setActivePath }}>{children}</SideNavMenuContext.Provider>;
};

export const useSideNavMenuContext = () => {
  return useContext(SideNavMenuContext);
};
