import api from "./apiService";

function getGames() {
  return api("/games").then((data) => data);
}

function saveGame(game) {
  return api("/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  }).then((data) => data);
}

export { getGames, saveGame };
