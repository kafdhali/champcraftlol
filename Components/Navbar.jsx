import {
  Flex,
  VStack,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";

function Navbar() {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg="black"
      color="white"
      px="4"
      py="2"
      zIndex={10}
    >
      <VStack spacing="4" align="flex-start">
        <Text as={RouterLink} to="/">
          Home
        </Text>
        <Text as={RouterLink} to="/about">
          About Us
        </Text>
        <Text as={RouterLink} to="/contact">
          Contact Us
        </Text>
      </VStack>
    </Flex>
  );
}

export default Navbar;
