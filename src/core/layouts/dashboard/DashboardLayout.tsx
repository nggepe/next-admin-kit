"use client";
import "@radix-ui/themes/styles.css";
import "@/core/styles/radixTheme.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import { Box, Flex, Theme } from "@radix-ui/themes";
import SideNav from "../components/SideNav";
import { LayoutProvider } from "../../context/LayoutContext";
import Link from "next/link";

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Theme accentColor='orange' grayColor='gray' panelBackground='translucent'>
        <LayoutProvider>{children}</LayoutProvider>
      </Theme>
    </ThemeProvider>
  );
};

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DashboardProvider>
      <div className='layout-bg-blur'>
        <Flex className='layout-bg-alpha'>
          <SideNav />
          <Box flexGrow='1' position='relative' className='transition-200'>
            <Header />
            <div
              style={{
                height: "100vh",
                marginTop: "-70px",
                paddingTop: "70px",
                overflowY: "scroll"
              }}
            >
              <main className='flex-1' style={{ minHeight: "calc(100vh - 120px)" }}>
                {children}
              </main>
              {/* footer */}
              <Box as='div' className='bg-panel' px={"4"}>
                <Flex justify={"end"} align={"center"} height={"50px"}>
                  <span>
                    Made with ❤️ by{" "}
                    <Link href={"https://github.com/nggepe"} target='_blank'>
                      Gilang Pratama
                    </Link>
                  </span>
                </Flex>
              </Box>
            </div>
          </Box>
        </Flex>
      </div>
    </DashboardProvider>
  );
};

export default DashboardLayout;
