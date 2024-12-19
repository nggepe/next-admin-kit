"use client";
import "./Header.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Avatar, Button, Flex, IconButton, Text } from "@radix-ui/themes";
import { SideNavStateIcon } from "@/core/constants/SideNavStateIcon";
import { useLayoutContext } from "@/core/context/LayoutContext";
import { CaretDownIcon, PersonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Profile = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Flex direction={"column"} width={"250px"} align={"center"} justify={"start"} py={"4"}>
      <Flex direction={"column"} align={"center"}>
        <Avatar fallback={"A"} size={"5"} mb={"2"} src='/images/profile.jpeg' radius='full'></Avatar>
        <Text as='span' size={"4"} weight='bold' style={{ marginTop: "1rem" }}>
          Gilang Pratama
        </Text>
        <Flex>
          <Link href={"mailto: nggepee@gmail.com"} className='text-center'>
            <Text as='span' size={"1"} weight='light' truncate>
              nggepee@gmail.com
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Flex direction={"column"} align={"center"} mt={"4"}>
        <Link href={"/login"}>
          <Button variant={"outline"} size={"1"}>
            Logout
          </Button>
        </Link>
      </Flex>
      <Flex direction={"column"} align={"center"} className='w-100' mt={"5"}>
        <Flex
          className='hover w-100 cursor-pointer'
          py={"2"}
          px={"4"}
          gap={"3"}
          align={"start"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Flex align={"center"}>
            {theme === "light" ? <SunIcon aria-label='Theme is light' /> : <MoonIcon aria-label='Theme is dark' />}
          </Flex>
          <Flex align={"center"}>
            <Text as='span' size={"1"} weight='light' truncate>
              Change Theme
            </Text>
          </Flex>
        </Flex>
        <Link href={"/profile"} className='w-100'>
          <Flex className='hover w-100 cursor-pointer' py={"2"} px={"4"} gap={"3"} align={"start"}>
            <Flex align={"center"}>
              <PersonIcon />
            </Flex>
            <Flex align={"center"}>
              <Text as='span' size={"1"} weight='light' truncate>
                Edit Profile
              </Text>
            </Flex>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

const Header = () => {
  const { sideNavState, toggleSideNavState } = useLayoutContext();
  return (
    <header className='NavigationContainer'>
      <Flex justify={"between"} align={"center"} className='w-100' p={"2"}>
        <Flex>
          {sideNavState === "mobile-hide" && (
            <IconButton onClick={toggleSideNavState}>{SideNavStateIcon[sideNavState]}</IconButton>
          )}
        </Flex>
        <Flex>
          <NavigationMenu.Root className='NavigationMenuRoot'>
            <NavigationMenu.List className='NavigationMenuList'>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className='NavigationMenuTrigger'>
                  <Avatar fallback={"ST"} size={"2"} src='/images/profile.jpeg' mr={"2"} radius='full'></Avatar>
                  <Text as='span'>Gilang Pratama</Text>
                  <CaretDownIcon className='CaretDown' aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className='NavigationMenuContent'>
                  <Profile />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Indicator className='NavigationMenuIndicator'>
                <div className='Arrow' />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
