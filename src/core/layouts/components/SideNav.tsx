"use client";
import { Box, Flex, IconButton, ScrollArea } from "@radix-ui/themes";
import "./SideNav.css";
import SideNavLogo from "./SideNavLogo";
import useMounted from "@/core/hooks/useMounted";
import { useLayoutContext } from "@/core/context/LayoutContext";
import { SideNavStateIcon } from "@/core/constants/SideNavStateIcon";
import SideNavMenu from "./SideNavMenu";
import { Suspense } from "react";

const SideNav = () => {
  const mounted = useMounted();
  const { sideNavState, toggleSideNavState } = useLayoutContext();

  if (!mounted) {
    return <></>;
  }

  return (
    <Box className={`SideNavWrapper transition-200 ${sideNavState}`} aria-label='side navigation wrapper'>
      <Flex justify={"between"} align={"center"} style={{ padding: "0.75rem" }}>
        <SideNavLogo />
        <IconButton
          variant={"outline"}
          aria-label='Toggle Side Nav'
          className='ToggleSideNav'
          onClick={toggleSideNavState}
        >
          {SideNavStateIcon[sideNavState]}
        </IconButton>
      </Flex>
      <ScrollArea scrollbars='vertical' style={{ height: "calc(100vh - 100px)", marginTop: "0.5rem", padding: "1rem" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <SideNavMenu />
        </Suspense>
      </ScrollArea>
    </Box>
  );
};

export default SideNav;
