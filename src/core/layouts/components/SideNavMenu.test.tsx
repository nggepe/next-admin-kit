import { fireEvent, render, screen } from "@testing-library/react";
import SideNavMenu, { accessToMenu, checkActive } from "./SideNavMenu";

import { ContainerIcon, HomeIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";

// Mock next/link
vi.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({ children, href, ...rest }: any) => (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
        }}
        {...rest}
      >
        {children}
      </a>
    )
  };
});

describe("SideNavMenu", () => {
  beforeAll(() => {
    vi.doMock("@/configs/accesses", () => {
      return {
        accesses: [
          {
            key: "main-menus",
            name: "Main",
            type: "sidenavSeparator",
            sequence: 1
          },
          {
            key: "home",
            name: "Home",
            path: "/home",
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
        ]
      };
    });
  });

  it("should normal render aria-label", () => {
    render(<SideNavMenu />);
    const home = screen.getByLabelText("home");
    expect(home).toBeInTheDocument();
  });

  it("should activate menu when it is clicked", async () => {
    render(<SideNavMenu />);
    const home = screen.getByLabelText("menu-item-home");
    await fireEvent.click(home);
    expect(home).toHaveClass("active");
  });

  it("should return null when invisible access", async () => {
    const el = accessToMenu({ key: "access", name: "test-invisible", sequence: 1, type: "invisibleAccess" });
    expect(el).toBe(null);
  });

  it("should activate menu when it is clicked", async () => {
    render(<SideNavMenu />);
    const master = screen.getByLabelText("menu-item-master");
    await fireEvent.click(master);
    expect(master).toHaveClass("active");
  });

  it("should activate parent", () => {
    const isActive = checkActive("/master/user", {
      name: "master",
      key: "master",
      sequence: 1,
      type: "sidenavMenu",
      children: [
        {
          name: "Users",
          key: "master/users",
          sequence: 1,
          type: "sidenavMenu",
          path: "/master/user"
        }
      ]
    });

    expect(isActive).toBe(true);
  });

  it("should parent is inactive when child is inactive", () => {
    const isActive = checkActive("/master/user", {
      name: "master",
      key: "master",
      sequence: 1,
      type: "sidenavMenu",
      children: [
        {
          name: "Users",
          key: "master/users/wrong",
          sequence: 1,
          type: "sidenavMenu",
          path: "/master/wrong"
        }
      ]
    });

    expect(isActive).toBe(false);
  });

  it("should activate parent with deep children", () => {
    const isActive = checkActive("/master/user/add", {
      name: "master",
      key: "master",
      sequence: 1,
      type: "sidenavMenu",
      children: [
        {
          name: "Users",
          key: "master/users",
          sequence: 1,
          type: "sidenavMenu",
          path: "/master/user",
          children: [
            {
              name: "Users",
              key: "master/users",
              sequence: 1,
              type: "sidenavMenu",
              path: "/master/user/add"
            }
          ]
        }
      ]
    });

    expect(isActive).toBe(true);
  });

  it("should active in one level", () => {
    const isActive = checkActive("/master/user", {
      name: "master",
      key: "master",
      sequence: 1,
      type: "sidenavMenu",
      path: "/master/user"
    });

    expect(isActive).toBe(true);
  });
});
