import { useEffect } from "react";
import { saveGame } from "../services/games";
import useGames from "./hooks/useGames";

function Games({ navItems, setNavItems }) {
  const [games, setGames] = useGames([]);
  console.log({ games });

  function assignGame(game, index) {
    const newValue = game?.borrower === "Logan" ? "Available" : "Logan";
    updateGame(game, index, newValue);
  }

  function updateGame(game, index, user) {
    console.log({ game, index });
    const newGames = [...games];
    newGames[index].borrower = user;
    setGames(newGames);
    saveGame(newGames[index]);
  }

  useEffect(() => {
    setNavItems({
      activeIndex: navItems.activeIndex || 0,
      items: games.map((game, index) => {
        return {
          ...game,
          accept: () => {
            assignGame(game, index);
          },
        };
      }),
    });
  }, [games]);

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
