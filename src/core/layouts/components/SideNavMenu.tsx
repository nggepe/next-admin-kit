"use client";
import { accesses, accessProps } from "@/configs/accesses";
import { SideNavMenuProvider, useSideNavMenuContext } from "@/core/context/SideNavMenuContext";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const SideNavMenu = () => {
  const menus = useMemo(() => {
    return accesses.map(accessToMenu);
  }, []);
  return (
    <SideNavMenuProvider>
      <nav>
        <ul>{menus}</ul>
      </nav>
    </SideNavMenuProvider>
  );
};

export default SideNavMenu;

export const accessToMenu = (access: accessProps) => {
  if (access.type === "sidenavSeparator") {
    return SidenavSeparatorElement(access);
  }

  if (access.type === "sidenavMenu") {
    return SideNavMenuWrapperPath(access);
  }
  return null;
};

const SidenavSeparatorElement = (access: accessProps) => {
  return (
    <li key={access.key} aria-label={access.key}>
      <Text size='2' key={access.key} weight={"medium"}>
        {access.name.toUpperCase()}
      </Text>
    </li>
  );
};

const SideNavMenuWrapperPath = (access: accessProps) => {
  if (access.children) {
    return <SideNavMenuHasChildren key={access.key} access={access} />;
  }
  return <SideNavMenuNoChildren key={access.key} access={access} />;
};

export const SideNavMenuNoChildren = ({ access }: { access: accessProps }) => {
  const { activePath, setActivePath } = useSideNavMenuContext();

  const isActive = useMemo(() => {
    return activePath === access.path;
  }, [activePath, access.path]);

  return (
    <li key={access.key} aria-label={access.key}>
      <Link href={access.path!}>
        <Box
          py={"2"}
          className={`cursor-pointer d-block position-relative hover ${isActive ? "active" : ""}`}
          px={"4"}
          onClick={() => {
            setActivePath(access.path ?? "");
          }}
          aria-label={`menu-item-${access.key}`}
        >
          <Flex gap='4' justify={"start"} align={"center"}>
            {access.icon && <Flex>{access.icon}</Flex>}
            <Flex flexGrow='1' style={{ maxWidth: "200px" }}>
              <div style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", width: "100%", overflow: "hidden" }}>
                <Text size='4' key={access.key} weight={"medium"}>
                  {access.name}
                </Text>
              </div>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </li>
  );
};

export const SideNavMenuHasChildren = ({ access }: { access: accessProps }) => {
  const { activePath } = useSideNavMenuContext();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(checkActive(activePath, access));
  }, [activePath, access]);
  return (
    <li key={access.key} aria-label={access.key}>
      <Box
        className={`cursor-pointer d-block position-relative hover ${isActive ? "active" : ""}`}
        py={"2"}
        px={"4"}
        onClick={() => setIsActive(!isActive)}
        aria-label={`menu-item-${access.key}`}
      >
        <Flex gap='4' justify={"start"} align={"center"}>
          {access.icon && <Flex>{access.icon}</Flex>}
          <Flex flexGrow='1' style={{ maxWidth: "200px" }}>
            <div style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", width: "100%", overflow: "hidden" }}>
              <Text size='4' key={access.key} weight={"medium"}>
                {access.name}
              </Text>
            </div>
          </Flex>
        </Flex>
        <div style={{ position: "absolute", right: "1rem", top: "30%" }}>
          <ChevronDownIcon style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)", transition: "0.5s" }} />
        </div>
      </Box>
      <ul>
        {isActive &&
          access.children!.map((child) => {
            return accessToMenu(child);
          })}
      </ul>
    </li>
  );
};

export const checkActive = (windowPath: string, access: accessProps) => {
  if (access.children) {
    let active = false;
    for (const child of access.children) {
      if (windowPath === child.path) {
        active = true;
        break;
      }
      if (child.children) {
        if (checkActive(windowPath, child)) {
          active = true;
          break;
        }
      }
    }
    return active;
  }

  return windowPath === access.path;
};
