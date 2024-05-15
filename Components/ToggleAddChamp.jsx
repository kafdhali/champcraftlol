import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import AddChampion from "./AddChampion";

const ToggleAddChampion = ({ setChampions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAddChampion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Button colorScheme="teal" onClick={toggleAddChampion}>
        Click Here To Add New Champion
      </Button>
      {isOpen && <AddChampion setChampions={setChampions} />}
    </Box>
  );
};

export default ToggleAddChampion;
