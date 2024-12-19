"use client";

import CustomCard from "@/components/card/CustomCard";
import {
  TimeLine,
  TimeLineConnector,
  TimeLineContent,
  TimeLineDot,
  TimeLineItem,
  TimeLineSeparator
} from "@/components/timeline/TimeLine";
import useMediaQuery from "@/hooks/useMediaQuery";
import { GitHubLogoIcon, InstagramLogoIcon, LinkNone2Icon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Button, Card, Container, Flex, Grid, Heading, Progress, Tabs, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const Schedule = () => {
  return (
    <TimeLine>
      <TimeLineItem gap={"2"} justify={"start"}>
        <TimeLineSeparator>
          <TimeLineDot color='orange'></TimeLineDot>
          <TimeLineConnector color='orange'></TimeLineConnector>
        </TimeLineSeparator>
        <TimeLineContent as='div'>
          <Text size='2'>
            <Text size='2' as='div' weight='bold'>
              August 20, 2024
            </Text>
            <Text size='2' color='gray'>
              (Feat) Create new component timeline
            </Text>
          </Text>
        </TimeLineContent>
      </TimeLineItem>
      <TimeLineItem gap={"2"} justify={"start"}>
        <TimeLineSeparator>
          <TimeLineDot color='orange'></TimeLineDot>
          <TimeLineConnector color='orange'></TimeLineConnector>
        </TimeLineSeparator>
        <TimeLineContent as='div'>
          <Text size='2'>
            <Text size='2' as='div' weight='bold'>
              August 21, 2024
            </Text>
            <Text size='2' color='gray'>
              (Feat) Create new component profile
            </Text>
          </Text>
        </TimeLineContent>
      </TimeLineItem>
      <TimeLineItem gap={"2"} justify={"start"}>
        <TimeLineSeparator>
          <TimeLineDot color='orange'></TimeLineDot>
          <TimeLineConnector color='orange'></TimeLineConnector>
        </TimeLineSeparator>
        <TimeLineContent as='div'>
          <Text size='2'>
            <Text size='2' as='div' weight='bold'>
              August 22, 2024
            </Text>
            <Text size='2' color='gray'>
              (Hotfix) Bug draggable card
            </Text>
          </Text>
        </TimeLineContent>
      </TimeLineItem>
      <TimeLineItem gap={"2"} justify={"start"}>
        <TimeLineSeparator>
          <TimeLineDot color='orange'></TimeLineDot>
          <TimeLineConnector color='orange'></TimeLineConnector>
        </TimeLineSeparator>
        <TimeLineContent as='div'>
          <Text size='2'>
            <Text size='2' as='div' weight='bold'>
              August 23, 2024
            </Text>
            <Text size='2' color='gray'>
              (Hotfix) Dialog UI
            </Text>
          </Text>
        </TimeLineContent>
      </TimeLineItem>
      <TimeLineItem gap={"2"} justify={"start"}>
        <TimeLineSeparator>
          <TimeLineDot color='orange'></TimeLineDot>
          <TimeLineConnector color='orange'></TimeLineConnector>
        </TimeLineSeparator>
        <TimeLineContent as='div'>
          <Text size='2'>
            <Text size='2' as='div' weight='bold'>
              August 24, 2024
            </Text>
            <Text size='2' color='gray'>
              (Hotfix) Lorem ipsum dolor sit amet
            </Text>
          </Text>
        </TimeLineContent>
      </TimeLineItem>
    </TimeLine>
  );
};

const ProfilePage = () => {
  useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <Container maxWidth={"1300px"} style={{ marginRight: "auto", marginLeft: "auto" }} pt={"4"} px={"4"} py={"5"}>
        <Flex
          wrap={{
            lg: "nowrap",
            initial: "wrap"
          }}
          gap={"3"}
          justify={"center"}
        >
          <Flex
            flexGrow={"0"}
            width={{
              lg: "350px",
              md: "350px",
              initial: "100%"
            }}
          >
            <CustomCard
              style={{
                marginTop: "80px",
                paddingTop: "80px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
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
          <Flex
            width={{
              lg: "calc(100% - 350px)",
              md: "calc(100% - 350px)",
              initial: "100%"
            }}
          >
            <Card style={{ width: "100%" }}>
              <Tabs.Root defaultValue='skills'>
                <Tabs.List>
                  <Tabs.Trigger value='skills'>Skills</Tabs.Trigger>
                  <Tabs.Trigger value='settings'>Settings</Tabs.Trigger>
                  <Tabs.Trigger value='schedule'>Schedule</Tabs.Trigger>
                </Tabs.List>
                <Box pt='3'>
                  <Tabs.Content value='skills'>
                    <Heading as='h2' mt={"4"} mb={"2"}>
                      Programming Language
                    </Heading>
                    <Text size='2' as='div' mb='2'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illo magnam distinctio ducimus.
                      Nam sit, blanditiis officiis maiores quis tenetur, modi in ad sed fugiat corrupti laboriosam
                      architecto quo dolor!
                    </Text>
                    <Grid columns={{ lg: "3", md: "2", initial: "1" }} gapX={"7"} gapY={"4"}>
                      <Box>
                        <Text>Python</Text>
                        <Progress value={70} variant='classic' color='jade' />
                        <Text size={"1"} color='gray'>
                          2 years of experience
                        </Text>
                      </Box>
                      <Box>
                        <Text>Javascript</Text>
                        <Progress value={90} variant='classic' color='yellow' />
                        <Text size={"1"} color='gray'>
                          8 years of experience
                        </Text>
                      </Box>
                      <Box>
                        <Text>Typescript</Text>
                        <Progress value={85} variant='classic' color='blue' />
                        <Text size={"1"} color='gray'>
                          3 years of experience
                        </Text>
                      </Box>
                      <Box>
                        <Text>Dart</Text>
                        <Progress value={75} variant='classic' color='blue' />
                        <Text size={"1"} color='gray'>
                          4 years of experience
                        </Text>
                      </Box>
                      <Box>
                        <Text>PHP</Text>
                        <Progress value={85} variant='classic' color='violet' />
                        <Text size={"1"} color='gray'>
                          8 years of experience
                        </Text>
                      </Box>
                    </Grid>
                    <Heading as='h2' mt={"5"} mb={"2"}>
                      Framework & Library
                    </Heading>
                    <Text size='2' as='div' mb={"2"}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illo magnam distinctio ducimus.
                      Nam sit, blanditiis officiis maiores quis tenetur, modi in ad sed fugiat corrupti laboriosam
                      architecto quo dolor!
                    </Text>
                    <Grid columns={{ lg: "3", md: "2", initial: "1" }} gapX={"7"} gapY={"4"}>
                      <Flex className='w-100' gap={"3"}>
                        <Image src={"/logos/react.png"} alt='react' width={40} height={40} loading='lazy'></Image>
                        <Box className='w-100'>
                          <Text>React</Text>
                          <Progress value={70} variant='classic' color='blue' />
                          <Text size={"1"} color='gray'>
                            3 years of experience
                          </Text>
                        </Box>
                      </Flex>
                      <Flex className='w-100' gap={"3"}>
                        <Image src={"/logos/nextjs.png"} alt='next.js' width={40} height={40} loading='lazy'></Image>
                        <Box className='w-100'>
                          <Text>Next.js</Text>
                          <Progress value={90} variant='classic' color='gray' />
                          <Text size={"1"} color='gray'>
                            3 years of experience
                          </Text>
                        </Box>
                      </Flex>
                    </Grid>
                  </Tabs.Content>
                  <Tabs.Content value='settings'>
                    <Text size='2'>Edit your profile or update contact information.</Text>
                  </Tabs.Content>
                  <Tabs.Content value='schedule'>
                    <Schedule />
                  </Tabs.Content>
                </Box>
              </Tabs.Root>
            </Card>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default ProfilePage;
