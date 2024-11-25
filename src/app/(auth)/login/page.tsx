import CustomCard from "@/components/card/CustomCard";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Box width={"768px"} maxWidth={"100%"}>
      <CustomCard variant='surface'>
        <Flex>
          <Flex flexGrow={"1"} direction={"column"} gap={"3"}>
            <Text as='div' size='6' weight='bold'>
              Sign In
            </Text>
            <Text as='div' color='gray' size='2'>
              Start building your next project in minutes
            </Text>
            <Link href={"/"}>
              <Button>Sign In</Button>
            </Link>
          </Flex>
          <Flex flexGrow={"1"}></Flex>
        </Flex>
      </CustomCard>
    </Box>
  );
};

export default LoginPage;
