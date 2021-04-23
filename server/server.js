const fs = require("fs");

let chirps = [
  { name: "L3p", chirp: "purus semper eget duis at" },
  { name: "Malis", chirp: "purus semper eget duis at" },
  { name: "Roch", chirp: "enim blandit volutpat maecenas volutpat" },
  { name: "Berlo", chirp: "non sodales neque sodales ut" },
  { name: "Andi", chirp: "a arcu cursus vitae congue" },
];

const data = JSON.stringify(chirps);

try {
  fs.writeFileSync("chirps.json", data);
} catch {
  console.log(e);
}

try {
  const rawChirps = fs.readFileSync("chirps.json");
  const chirpData = JSON.parse(rawChirps);
  console.log(chirpData);
} catch {
  console.log(e);
}
