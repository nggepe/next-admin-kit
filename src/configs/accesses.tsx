import * as React from "react";
import { HomeIcon, ContainerIcon, PersonIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { ReactElement } from "react";

type accessType = "sidenavMenu" | "sidenavSeparator" | "invisibleAccess";

export interface accessProps {
  type: accessType;
  name: string;
  key: string;
  /**it is your `route` path, it will make the menu is active when the `url` contains this string  */
  path?: string;
  icon?: ReactElement;
  sequence: number;
  children?: accessProps[];
}

export const accesses: accessProps[] = [
  {
    key: "main-menus",
    name: "Main",
    type: "sidenavSeparator",
    sequence: 1
  },
  {
    key: "dashboard",
    name: "Dashboard",
    path: "/",
    icon: <HomeIcon />,
    type: "sidenavMenu",
    sequence: 2
  },
  {
    key: "master",
    name: "Master",
    icon: <ContainerIcon />,
    type: "sidenavMenu",
    sequence: 3,
    children: [
      {
        key: "/master/users",
        path: "/master/users",
        name: "Users",
        icon: <PersonIcon />,
        sequence: 1,
        type: "sidenavMenu"
      },
      {
        key: "/master/role",
        path: "/master/role",
        name: "Roles",
        icon: <LockClosedIcon />,
        sequence: 2,
        type: "sidenavMenu"
      }
    ]
  }
];
