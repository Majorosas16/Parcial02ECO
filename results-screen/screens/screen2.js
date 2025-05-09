import { navigateTo } from "../app.js";

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

      <button id="go-screen-back">Volver al inicio</button>
    </div>
  `;

  document.getElementById("go-screen-back").addEventListener("click", () => {
    navigateTo("/");
  });
}
