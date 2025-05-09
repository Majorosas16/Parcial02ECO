export default function renderScreen2(data) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div id="screen2">
      <h2>¡Winner: ${data?.winner?.nickname}!</h2>
      <p>had ${data?.winner?.score} score</p>

      <h3>Ranking:</h3>
      <div id="ranking-list">
        ${data.rankedPlayers
          .map(
            (player, index) =>
              `<p>${index + 1}. ${player.nickname} (${player.score} pts)</p>`
          )
          .join("")}
      </div>

      <button id="sort-alpha">Click to sort alphabetically</button>

    </div>
  `;

  document.getElementById("sort-alpha").addEventListener("click", () => {
    const sorted = [...data.rankedPlayers].sort((a, b) =>
      a.nickname.localeCompare(b.nickname)
    );
    renderRanking(sorted);
  });

  function renderRanking(players) {
    const rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = players
      .map(
        (player, index) =>
          `<p>${index + 1}. ${player.nickname} (${player.score} pts)</p>`
      )
      .join("");
  }
  
}
