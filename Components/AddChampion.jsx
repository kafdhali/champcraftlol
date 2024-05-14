import { useState } from "react";
import axios from "axios";
import { Box, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

function AddChampion({ setChampions }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [lane, setLane] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newChampion = {
      name,
      price,
      lane,
      description,
      thumbnail: imageLink,
    };

    axios
      .post("https://champcraft.adaptable.app/champions", newChampion)
      .then((response) => {
        console.log("Champion Added", response.data);
        // Update the champions state with the new champion
        setChampions((prevChampions) => [response.data, ...prevChampions]);
      })
      .catch((error) => {
        console.log("Error adding champion", error);
      });

    // Clear the form
    setName("");
    setPrice(0);
    setLane("");
    setDescription("");
    setImageLink("");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="price" isRequired>
          <FormLabel>Price:</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </FormControl>
        <FormControl id="lane" isRequired>
          <FormLabel>Lane:</FormLabel>
          <Input
            type="text"
            value={lane}
            onChange={(e) => setLane(e.target.value)}
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description:</FormLabel>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl id="imageLink" isRequired>
          <FormLabel>Image Link:</FormLabel>
          <Input
            type="text"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
          />
        </FormControl>
        <Button mt="4" colorScheme="teal" type="submit">
          Add Champion
        </Button>
      </form>
    </Box>
  );
}

export default AddChampion;
