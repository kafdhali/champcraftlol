import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import {
  SimpleGrid,
  Button,
  Box,
  Input,
  FormControl,
  FormLabel,
  Center,
} from "@chakra-ui/react";
import ToggleAddChampion from "./ToggleAddChamp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ChampionList() {
  const [champions, setChampions] = useState([]);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    axios
      .get("https://champcraft.adaptable.app/champions") //api end-point champions
      .then((response) => {
        setChampions(response.data);
        const initialUpdatedData = {};
        response.data.forEach((champion) => {
          if (!updatedData[champion.id]) {
            initialUpdatedData[champion.id] = { lane: "", price: "" };
          }
        });
        setUpdatedData(initialUpdatedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function HandleDelete(id) {
    const handleConfirm = () => {
      axios
        .delete(`https://champcraft.adaptable.app/champions/${id}`)
        .then((response) => {
          console.log("Champion Deleted", response.data);
          setChampions(champions.filter((champion) => champion.id !== id));
          toast.dismiss();
        })
        .catch((error) => {
          console.log("Something Went Wrong", error);
        });
    };

    toast(
      ({ closeToast }) => (
        <div>
          <p>really?? are you sure???</p>
          <Button colorScheme="red" size="sm" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button colorScheme="gray" size="sm" onClick={closeToast}>
            Cancel
          </Button>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  }

  function HandleUpdate(id) {
    const championToUpdate = champions.find((champion) => champion.id === id);
    const updatedChampion = { ...championToUpdate, ...updatedData[id] };

    axios
      .put(`https://champcraft.adaptable.app/champions/${id}`, updatedChampion)
      .then((response) => {
        console.log("Champion Updated", response.data);
        setChampions(
          champions.map((champion) =>
            champion.id === id ? response.data : champion
          )
        );
        setUpdatedData({
          ...updatedData,
          [id]: { lane: "", price: "" },
        });
      })
      .catch((error) => {
        console.log("Something Went Wrong", error);
      });
  }

  return (
    <Box>
      <Center mt={4} mb={1}>
        <RouterLink to="/">
          <img
            src="https://i.ibb.co/kHZ36CD/kv-Bm-OG4g-RTG9-PT76-Mdlkew-removebg-preview.png"
            alt="champ-craft"
          />
        </RouterLink>
      </Center>
      <ToggleAddChampion setChampions={setChampions} />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {champions.map((champion) => (
          <Box key={champion.id} boxShadow="md" p="4" rounded="md">
            <RouterLink to={`/champions/${champion.id}`}>
              <img
                src={champion.thumbnail}
                alt={champion.name}
                style={{ display: "block", margin: "0 auto" }}
              />
            </RouterLink>
            <Box mt="4">
              <h2>{champion.name}</h2>
              <p>{champion.description}</p>
              <p>{champion.lane}</p>
              <p>{champion.price}</p>
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => {
                  HandleDelete(champion.id);
                }}
                mr="2"
              >
                Delete
              </Button>

              <FormControl
                as="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  HandleUpdate(champion.id);
                }}
              >
                <FormLabel>New Lane</FormLabel>
                <Input
                  type="text"
                  value={updatedData[champion.id]?.lane}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      [champion.id]: {
                        ...updatedData[champion.id],
                        lane: e.target.value,
                      },
                    })
                  }
                  placeholder="Enter new lane"
                  mb="2"
                />
                <FormLabel>New Price</FormLabel>
                <Input
                  type="text"
                  value={updatedData[champion.id]?.price}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      [champion.id]: {
                        ...updatedData[champion.id],
                        price: e.target.value,
                      },
                    })
                  }
                  placeholder="Enter new price"
                  mb="2"
                />
                <Button colorScheme="blue" type="submit">
                  Update
                </Button>
              </FormControl>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ChampionList;
