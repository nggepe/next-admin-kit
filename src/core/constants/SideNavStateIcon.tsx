import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export type SideNavState = "mini" | "large" | "mobile-hide" | "mobile-show";

export const SideNavStateIcon = {
  mini: <ArrowRightIcon fontSize={"20px"} />,
  large: <ArrowLeftIcon fontSize={"20px"} />,
  "mobile-hide": <></>,
  "mobile-show": <></>
};
