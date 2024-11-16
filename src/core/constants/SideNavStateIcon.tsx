import { ArrowLeftIcon, ArrowRightIcon, Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

export type SideNavState = "mini" | "large" | "mobile-hide" | "mobile-show";

export const SideNavStateIcon = {
  mini: <ArrowRightIcon fontSize={"20px"} />,
  large: <ArrowLeftIcon fontSize={"20px"} />,
  "mobile-hide": <HamburgerMenuIcon fontSize={"20px"} />,
  "mobile-show": <Cross1Icon fontSize={"20px"} />
};
