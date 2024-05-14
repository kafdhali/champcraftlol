import { Flex, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Flex
      direction="column"
      position="fixed"
      left="0"
      top="0"
      height="100%"
      width="200px"
      bg="black"
      color="white"
      px="4"
      py="8"
    >
      <VStack spacing="4" align="flex-start">
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/about">
          <Text>About Us</Text>
        </Link>
        <Link to="/contact">
          <Text>Contact Us</Text>
        </Link>
      </VStack>
    </Flex>
  );
}

export default Sidebar;
