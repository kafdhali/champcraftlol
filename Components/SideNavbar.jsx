/* import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Flex, IconButton, useDisclosure, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={onOpen}
        size="md"
        variant="ghost"
        position="fixed"
        top="20px"
        left="20px"
      >
        Menu
      </IconButton>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column">
                <Link to="/" onClick={onClose}><Text>Home</Text></Link>
                <Link to="/about" onClick={onClose}><Text>About Us</Text></Link>
                <Link to="/contact" onClick={onClose}><Text>Contact Us</Text></Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default Sidebar; */
