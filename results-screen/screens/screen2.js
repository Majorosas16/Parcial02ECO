import { navigateTo, makeRequestScreen2 } from "../app.js";

export default function renderScreen2(data) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div id="screen2">
      <h2>🏆 ¡Ganador: ${data?.winner?.nickname}!</h2>
      <p>Obtuvo ${data?.winner?.score} puntos</p>

      <h3>Ranking:</h3>
      <ol id="ranking-list">
        ${data.rankedPlayers
          .map(
            (player, index) =>
              `<li>${index + 1}. ${player.nickname} (${player.score} pts)</li>`
          )
          .join("")}
      </ol>

      <button id="sort-alpha">Ordenar alfabéticamente</button>
      <button id="restart-game">Reiniciar juego</button>
      <button id="go-screen-back">Volver al inicio</button>
      <button id="restart-game">Reiniciar juego</button>

    </div>
  `;

  document.getElementById("go-screen-back").addEventListener("click", () => {
    navigateTo("/");
  });

  document.getElementById("sort-alpha").addEventListener("click", () => {
    const sorted = [...data.rankedPlayers].sort((a, b) =>
      a.nickname.localeCompare(b.nickname)
    );
    renderRanking(sorted);
  });

  document
    .getElementById("restart-game")
    .addEventListener("click", async () => {
      try {
        await fetch("/restart-game", {
          method: "POST",
        });
      } catch (err) {
        console.error("Error reiniciando el juego:", err);
      }
    });

  function renderRanking(players) {
    const rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = players
      .map(
        (player, index) =>
          `<li>${index + 1}. ${player.nickname} (${player.score} pts)</li>`
      )
      .join("");
  }
}
