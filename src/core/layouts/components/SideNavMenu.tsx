"use client";
import { accesses, accessProps } from "@/configs/accesses";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";

const SideNavMenu = () => {
  const menus = useMemo(() => {
    return accesses.map(accessToMenu);
  }, []);
  return (
    <nav>
      <ul>{menus}</ul>
    </nav>
  );
};

export default SideNavMenu;

const accessToMenu = (access: accessProps) => {
  if (access.type === "sidenavSeparator") {
    return SidenavSeparatorElement(access);
  }

  if (access.type === "sidenavMenu") {
    return SideNavMenuWrapperPath(access);
  }
  return <Fragment key={access.key} />;
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

const SideNavMenuNoChildren = ({ access }: { access: accessProps }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      setIsActive(window.location.pathname === access.path);
    }
  }, [access.path]);
  return (
    <li key={access.key} aria-label={access.key}>
      <Link href={access.path!}>
        <div className={`cursor-pointer px-3 py-2 d-block position-relative hover ${isActive ? "active" : ""}`}>
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
        </div>
      </Link>
    </li>
  );
};

const SideNavMenuHasChildren = ({ access }: { access: accessProps }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      setIsActive(checkActive(window.location.pathname, access));
    }
  }, [access]);
  return (
    <li key={access.key} aria-label={access.key}>
      <div
        className={`cursor-pointer px-3 py-2 d-block position-relative hover ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
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
      </div>
      <ul>
        {isActive &&
          access.children?.map((child) => {
            return accessToMenu(child);
          })}
      </ul>
    </li>
  );
};

const checkActive = (windowPath: string, access: accessProps) => {
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
