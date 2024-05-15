import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Heading, Text, Image, Skeleton } from "@chakra-ui/react";

function ChampDetails() {
  const [champion, setChampion] = useState(null);
  const { championId } = useParams();

  useEffect(() => {
    axios
      .get(`https://champcraft.adaptable.app/champions/${championId}`)
      .then((res) => {
        setChampion(res.data);
      })
      .catch((error) => {
        console.log("Something Went Wrong", error);
      });
  }, [championId]);

  if (!champion) {
    return <Skeleton height="300px" />;
  }

  return (
    <Box
      maxW="xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md" // Added box shadow
      textAlign="center" // Centered content
    >
      <Text fontSize="lg" fontWeight="bold" mb="2">
        {champion.name}
      </Text>
      <Image src={champion.thumbnail} alt={champion.title} mx="auto" />{" "}
      {/* Centered image */}
      <Box p="6">
        <Heading as="h2" size="xl" mb="2" fontWeight="bold">
          {" "}
          {/* Made title bigger */}
          {champion.title}
        </Heading>
        <Text color="gray.500" fontSize="lg" fontWeight="bold" mb="4">
          {" "}
          {/* Made Lane bold and bigger */}
          Lane: {champion.lane}
        </Text>
        <Text fontSize="lg" lineHeight="short" mb="4">
          {" "}
          {/* Made description bigger */}
          {champion.description}
        </Text>
        <Text fontSize="lg" fontWeight="semibold">
          Price: {champion.price}
        </Text>
      </Box>
    </Box>
  );
}

export default ChampDetails;
