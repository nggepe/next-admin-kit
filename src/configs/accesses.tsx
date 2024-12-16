import * as React from "react";
import { HomeIcon, LockClosedIcon, EnterIcon } from "@radix-ui/react-icons";
import { ReactElement } from "react";

type accessType = "sidenavMenu" | "sidenavSeparator" | "invisibleAccess";

export interface accessProps {
  /** if you set as `invisibleAccess` it will not show on your side navigation */
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
    key: "auth",
    name: "Auth",
    icon: <LockClosedIcon />,
    type: "sidenavMenu",
    sequence: 3,
    children: [
      {
        key: "/login",
        path: "/login",
        name: "Login",
        sequence: 1,
        type: "sidenavMenu",
        icon: <EnterIcon />
      }
    ]
  }
];
