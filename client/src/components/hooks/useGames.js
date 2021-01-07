import { useState, useEffect } from "react";
import { getGames } from "../../services/games";

function useGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((data) => {
      setGames(data);
    });
  }, []);

  return [games, setGames];
}

export default useGames;
