import { useState, useEffect } from "react";
import { getGames } from "../services/games";

function Games({ navItems, setNavItems }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((data) => {
      console.log({ data });
      setGames(data);
      setNavItems({
        activeIndex: 0,
        items: data.map((game) => {
          return {
            name: game.name,
            accept: function () {
              console.log(`borrow ${game.name}`);
            },
          };
        }),
      });
    });
  }, []);
  return (
    <>
      <p>
        <strong>Games Inventory</strong>
      </p>
      {games.map((game, index) => (
        <div
          key={game.name}
          className={navItems?.activeIndex === index ? "active_item" : ""}
        >
          {game.name}
        </div>
      ))}
    </>
  );
}

export default Games;
