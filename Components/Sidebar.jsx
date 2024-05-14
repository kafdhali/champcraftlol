import React from "react";
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Importing Link component from React Router

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      {/* Menu button displayed only in small viewports */}
      <Box display={{ base: "block", md: "none" }}>
        <Button colorScheme="teal" onClick={isOpen ? onClose : onOpen}>
          {isOpen ? "Close" : "Menu"}
        </Button>
      </Box>
      {/* Other buttons displayed only in large viewports */}
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        justify="space-between"
        wrap="wrap"
        w={{ base: "100%", md: "auto" }}
      >
        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button colorScheme="teal" variant="ghost">
              Home
            </Button>
          </Link>
        </Box>
        <Box>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button colorScheme="teal" variant="ghost">
              About us
            </Button>
          </Link>
        </Box>
        <Box>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button colorScheme="teal" variant="ghost">
              Contact us
            </Button>
          </Link>
        </Box>
      </Flex>
      {isOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Flex
            p={2}
            direction="column"
            bg={["primary.500", "primary.500", "white", "white"]}
            color={["white", "white", "primary.700", "primary.700"]}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button colorScheme="teal" variant="ghost" w="100%">
                Home
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button colorScheme="teal" variant="ghost" w="100%">
                About us
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button colorScheme="teal" variant="ghost" w="100%">
                Contact us
              </Button>
            </Link>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default Sidebar;
