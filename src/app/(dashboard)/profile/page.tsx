"use client";

import CustomCard from "@/components/card/CustomCard";
import useMediaQuery from "@/hooks/useMediaQuery";
import { GitHubLogoIcon, InstagramLogoIcon, LinkNone2Icon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Button, Container, Flex, Heading, Tabs, Text } from "@radix-ui/themes";
import Link from "next/link";

const ProfilePage = () => {
  useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <Container maxWidth={"1300px"} pt={"4"} px={"4"} py={"5"}>
        <Flex wrap={"wrap"}>
          <Flex flexGrow={"0"}>
            <CustomCard style={{ width: "clamp(200px, 350px, 100%)", marginTop: "80px", paddingTop: "80px" }}>
              <Avatar
                fallback={"G"}
                size={"9"}
                style={{
                  top: "-80px",
                  zIndex: "3",
                  position: "absolute",
                  left: "calc(50% - 80px)",
                  right: "calc(50% - 80px)",
                  border: "2px solid var(--gray-a3)"
                }}
                src='/images/profile.jpeg'
                radius='full'
                variant='solid'
              ></Avatar>
              <Flex direction={"column"} style={{ marginTop: "1rem" }} px={{ initial: "3" }} gap={"4"}>
                <Flex direction={"column"}>
                  <Heading as='h1' size={"7"} weight={"bold"}>
                    Gilang Pratama
                  </Heading>
                  <Text size={"3"} color='gray'>
                    Fullstack Developer
                  </Text>
                </Flex>
                <Text>I am a newbie who code by day and code by night</Text>
                <Flex direction={"column"} gap={"1"}>
                  <Button variant='classic'>Edit Profile</Button>
                  <Button variant='classic'>Change Password</Button>
                </Flex>
                <Flex direction={"column"} gap={"1"}>
                  <Link href={"https://github.com/nggepe"} prefetch>
                    <Flex gap={"2"} justify={"start"} align={"center"}>
                      <GitHubLogoIcon />
                      <Text as='div'>nggepe</Text>
                    </Flex>
                  </Link>
                  <Link href={"https://gepcode.com"} prefetch>
                    <Flex gap={"2"} justify={"start"} align={"center"}>
                      <LinkNone2Icon />
                      <Text>https://gepcode.com</Text>
                    </Flex>
                  </Link>
                  <Link href={"https://instagram.com/gilang.gp"} prefetch>
                    <Flex gap={"2"} justify={"start"} align={"center"}>
                      <InstagramLogoIcon />
                      <Text>@gilang.gp</Text>
                    </Flex>
                  </Link>
                  <Link href={"https://x.com/gepeee"} prefetch>
                    <Flex gap={"2"} justify={"start"} align={"center"}>
                      <TwitterLogoIcon />
                      <Text>gepeee</Text>
                    </Flex>
                  </Link>
                </Flex>
              </Flex>
            </CustomCard>
          </Flex>
          <Flex flexGrow={"1"}>
            <CustomCard style={{ width: "100%" }}>
              <Tabs.Root defaultValue='account'>
                <Tabs.List>
                  <Tabs.Trigger value='account'>Account</Tabs.Trigger>
                  <Tabs.Trigger value='documents'>Documents</Tabs.Trigger>
                  <Tabs.Trigger value='settings'>Settings</Tabs.Trigger>
                </Tabs.List>

                <Box pt='3'>
                  <Tabs.Content value='account'>
                    <Text size='2'>Make changes to your account.</Text>
                  </Tabs.Content>

                  <Tabs.Content value='documents'>
                    <Text size='2'>Access and update your documents.</Text>
                  </Tabs.Content>

                  <Tabs.Content value='settings'>
                    <Text size='2'>Edit your profile or update contact information.</Text>
                  </Tabs.Content>
                </Box>
              </Tabs.Root>
            </CustomCard>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default ProfilePage;
