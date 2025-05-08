// let players = [
//   { name: "Ana" },
//   { name: "Luis" },
//   { name: "Carlos" },
//   { name: "Marta" }
// ]

const assignRoles = (players) => {
  let shuffled = players.sort(() => 0.5 - Math.random())
  shuffled[0].role = "marco"
  shuffled[1].role = "polo-especial"
  for (let i = 2; i < shuffled.length; i++) {
    shuffled[i].role = "polo"
  }
  return shuffled 

  // [
//   { name: "Luis", role: "marco" },
//   { name: "Marta", role: "polo-especial" },
//   { name: "Carlos", role: "polo" },
//   { name: "Ana", role: "polo" }
// ]
}

module.exports = { assignRoles }
