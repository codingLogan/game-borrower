import { useState, useEffect } from "react";
import { getGames } from "../services/games";

function Games({ navItems, setNavItems }) {
  const [games, setGames] = useState([]);

  function giveGameToLogan(index, game) {
    console.log(`borrow ${game.name} to Logan`);
    const newGames = [...games];
    newGames[index].borrower = "Logan";
    setGames(newGames);
  }

  useEffect(() => {
    getGames().then((data) => {
      console.log({ data });
      setGames(data);

      setNavItems({
        activeIndex: 0,
        items: data.map((game, index) => {
          return {
            name: game.name,
            accept: function () {
              // For an example, lets "give" the game to Logan
              giveGameToLogan(index, game);
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
          {game.name} | {game.borrower || "Available"}
        </div>
      ))}
    </>
  );
}

export default Games;
