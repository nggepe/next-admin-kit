import "@radix-ui/themes/styles.css";
import "@/core/styles/radixTheme.css";
import ThemeToggle from "@/components/ThemeToggle";
import { Box, Flex, Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Theme accentColor='orange' grayColor='gray' panelBackground='translucent'>
        <Flex
          style={{ width: "100vw", height: "100vh" }}
          align={"center"}
          direction={"column"}
          justify={"center"}
          className='layout-bg-blur'
        >
          <Flex
            style={{ width: "100vw", height: "100vh" }}
            align={"center"}
            direction={"column"}
            justify={"center"}
            className='layout-bg-alpha'
          >
            {children}
          </Flex>
        </Flex>
        <Box position={"fixed"} right={"3"} top={"3"}>
          <ThemeToggle />
        </Box>
      </Theme>
    </ThemeProvider>
  );
};

export default AuthLayout;
