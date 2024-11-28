"use client";
import "@radix-ui/themes/styles.css";
import "@/core/styles/radixTheme.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import { Box, Container, Flex, Theme } from "@radix-ui/themes";
import SideNav from "../components/SideNav";
import { LayoutProvider } from "../../context/LayoutContext";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Theme accentColor='orange' grayColor='gray' panelBackground='translucent'>
        <LayoutProvider>
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
                    <Container maxWidth={"100%"} style={{ padding: "1rem 1rem" }} aria-label='container fluid'>
                      {children}
                    </Container>
                  </main>
                  <footer className='bg-panel px-3'>
                    <Flex justify={"end"} align={"center"} height={"50px"}>
                      <span>
                        Made with ❤️ by{" "}
                        <Link href={"https://github.com/nggepe"} target='_blank'>
                          Gilang Pratama
                        </Link>
                      </span>
                    </Flex>
                  </footer>
                </div>
              </Box>
            </Flex>
          </div>
        </LayoutProvider>
      </Theme>
    </ThemeProvider>
  );
};

export default DashboardLayout;
