import axios from "axios";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    return <div className="loader"></div>;
  }

  return (
    <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={champion.thumbnail} alt={champion.title} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Heading as="h2" size="lg" mr="2">
            {champion.title}
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Lane: {champion.lane}
          </Text>
        </Box>
        <Text mt="2" fontSize="sm" fontWeight="semibold" lineHeight="short">
          Description: {champion.description}
        </Text>
        <Text mt="2" fontSize="sm" fontWeight="semibold" lineHeight="short">
          Price: {champion.price}
        </Text>
      </Box>
    </Box>
  );
}

export default ChampDetails;
