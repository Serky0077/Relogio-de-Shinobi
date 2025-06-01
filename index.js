const startReal = Date.now();
const startRPG = new Date("2072-03-10T07:00:00");

function updateRPGTime() {
  const nowReal = Date.now();
  const elapsedRealSeconds = Math.floor((nowReal - startReal) / 1000);
  const elapsedRPGMinutes = elapsedRealSeconds; // 1 segundo real = 1 minuto RPG
  const rpgDate = new Date(startRPG.getTime() + elapsedRPGMinutes * 60000);

  document.getElementById("rpg-time").innerText =
    `Tempo Shinobi: ${rpgDate.toLocaleString()}`;
}

setInterval(updateRPGTime, 1000);
