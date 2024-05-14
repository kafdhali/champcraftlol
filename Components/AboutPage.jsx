import { Box, Heading, Text, Avatar, VStack } from "@chakra-ui/react";
import Footer from "./Footer";

function AboutPage() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        About Us
      </Heading>
      <VStack spacing={8}>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Box textAlign="center">
            <Avatar
              size="xl"
              name="Your Name"
              src="https://i.ibb.co/FXsmxnV/profile-pic-7.png"
              mb={4}
              mx="auto"
            />
            <Heading as="h2" size="lg">
              Khaled Afdhal
            </Heading>
            <Text mt={2}>
              Meet Khaled, a versatile individual fueled by innovation and
              creativity. With a diverse range of interests spanning technology
              and beyond, Khaled embraces challenges to make a positive impact.
              Explore endless possibilities with Khaled!
            </Text>
          </Box>
          <Box textAlign="center">
            <Avatar
              size="xl"
              name="Co-worker's Name"
              src="https://i.ibb.co/47N6nM1/profile-pic-8.png"
              mb={4}
              mx="auto"
            />
            <Heading as="h2" size="lg">
              Alexandre Cabral
            </Heading>
            <Text mt={2}>
              Meet Alex, a dynamic individual passionate about innovation and
              creativity. Known for diverse interests and expertise in
              technology and beyond, Alex seeks new challenges to make a
              positive impact. Discover endless possibilities with Alex!
            </Text>
          </Box>
        </Box>
        <Box
          bg="gray.200"
          p={6}
          borderRadius="md"
          boxShadow="md"
          textAlign="justify"
        >
          <Text fontSize="xl" as="em">
            Welcome to ChampCraft, where you can personalize your League of
            Legends champions like never before. <br />
            <br />
            Our team is driven by a passion for gaming and innovation, dedicated
            to enhancing your League of Legends experience. <br />
            <br />
            Choose from a vast selection of champions, customize their abilities
            and appearances, and create your dream roster. <br />
            <br />
            ChampCraft is more than an app; it's a community where you can share
            and showcase your creations. <br />
            <br />
            Join us and redefine how you experience League of Legends with
            ChampCraft today!
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
export default AboutPage;
