"use client";
import { Box, Flex, IconButton } from "@radix-ui/themes";
import "./SideNav.css";
import SideNavLogo from "./SideNavLogo";
import useMounted from "@/core/hooks/useMounted";
import { useLayoutContext } from "@/core/context/LayoutContext";
import { SideNavStateIcon } from "@/core/constants/SideNavStateIcon";

const SideNav = () => {
  const mounted = useMounted();
  const { sideNavState, toggleSideNavState } = useLayoutContext();

  if (!mounted) {
    return <></>;
  }

  return (
    <Box className={`SideNavWrapper transition-200 ${sideNavState}`}>
      <Flex justify={"between"} align={"center"} style={{ padding: "0.75rem" }}>
        <SideNavLogo />
        <IconButton variant={"outline"} className='ToggleSideNav' onClick={toggleSideNavState}>
          {SideNavStateIcon[sideNavState]}
        </IconButton>
      </Flex>
    </Box>
  );
};

export default SideNav;
