import axios from "axios";
import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";

function ChampionList() {
  const [champions, setChampions] = useState([]);
  const [lane, setLane] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    axios
      .get("https://champcraft.adaptable.app/champions") //api end-point champions
      .then((response) => {
        setChampions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function HandleDelete() {
    axios
      .delete(`https://champcraft.adaptable.app/champions/${id}`)
      .then((response) => {
        console.log("Champion Deleted", response.data);
        setChampions(champions.filter((champion) => champion.id !== id));
      })
      .catch((error) => {
        console.log("Something Went Wrong", error);
      });
  }

  function HandleUpdate() {
    axios.put;
  }

  console.log(champions);

  return (
    <div>
      <h1>League Champions</h1>
      <div className="champion-list">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {champions.map((champion) => (
            <div key={champion.id} champion={champion}>
              <img src={champion.thumbnail} />
              <div>
                <h2>{champion.name}</h2>
                <p>{champion.description}</p>
                <p>{champion.lane}</p>
                <p>{champion.price}</p>
                <button
                  className="button-delete"
                  onClick={() => {
                    HandleDelete(champion.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}

export default ChampionList;
