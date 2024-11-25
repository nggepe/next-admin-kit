"use client";
import CustomCard from "@/components/card/CustomCard";
import useMediaQuery from "@/hooks/useMediaQuery";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Box, Button, Checkbox, Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <Box width={"768px"} maxWidth={"100%"}>
      <CustomCard variant='surface'>
        <Flex>
          <Flex flexGrow={"1"} direction={"column"} gap={"3"} justify={"center"} className='px-3'>
            <Text as='div' size='8' weight='bold' className='mb-3'>
              Sign In
            </Text>
            <Text as='div' color='gray' size='2'>
              Login to your account to continue
            </Text>
            <TextField.Root placeholder='Email' type='email' id='email'></TextField.Root>
            <TextField.Root placeholder='Password' type='password' id='email'></TextField.Root>
            <Flex gap='2' align={"center"}>
              <Checkbox defaultChecked />
              Remember me
            </Flex>
            <Link href={"/"}>
              <Button variant='classic' className='w-100'>
                Sign In
              </Button>
            </Link>
            <Text as='div' align={"center"}>
              OR
            </Text>
            <Flex align={"center"} justify={"center"} gap={"2"}>
              <IconButton variant='outline'>
                <GitHubLogoIcon />
              </IconButton>
              <IconButton variant='outline'>
                <TwitterLogoIcon />
              </IconButton>
              <IconButton variant='outline'>
                <LinkedInLogoIcon />
              </IconButton>
            </Flex>
          </Flex>
          <Flex flexGrow={"0"}>
            {matches && (
              <Box position={"relative"} width={"400px"} height={"400px"}>
                <Image
                  src={"/images/illustrations/teenager.png"}
                  width={400}
                  height={400}
                  alt='login illustration'
                  style={{ position: "absolute", bottom: "0", left: "0" }}
                />
              </Box>
            )}
          </Flex>
        </Flex>
      </CustomCard>
    </Box>
  );
};

export default LoginPage;
