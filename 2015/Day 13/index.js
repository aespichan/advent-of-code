import fs from "node:fs";
import readline from "node:readline";
import DinnerKnights from "./dinner_knights.js";

const readFile = (filename) => {
  return readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    terminal: false,
  });
};

const getDinnerKnights = async (filename) => {
  const file = readFile(filename);
  const dinnerKnights = new DinnerKnights();
  for await (const line of file) {
    dinnerKnights.addEdge(line);
  }
  return dinnerKnights;
};

const part1 = (dinnerKnights) => {
  console.log(`1. ${dinnerKnights.maximizeHappiness()}`);
};

const part2 = (dinnerKnights) => {
  const happiness = dinnerKnights.maximizeHappiness({ includeMyself: true });
  console.log(`2. ${happiness}`);
};

async function adventCode(filename) {
  try {
    const dinnerKnights = await getDinnerKnights(filename);
    part1(dinnerKnights);
    part2(dinnerKnights);
  } catch (err) {
    console.error(err);
  }
}

if (process.argv.length < 3) {
  console.log("Usage: node index.js <filename>");
} else {
  const filename = process.argv[2];
  adventCode(filename);
}
