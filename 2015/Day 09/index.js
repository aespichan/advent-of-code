import fs from "node:fs";
import readline from "node:readline";
import SantaRoutes from "./santa_routes.js";

const readFile = (filename) => {
  return readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    terminal: false,
  });
};

const getCandidateDistances = async (filename) => {
  const file = readFile(filename);
  const routes = new SantaRoutes();
  for await (const line of file) {
    routes.addEdge(line);
  }
  return routes.possibleDistances();
};

const part1 = (distances) => {
  const minDistance = Math.min(...distances);
  console.log(`1. ${minDistance}`);
};

const part2 = (distances) => {
  const maxDistance = Math.max(...distances);
  console.log(`2. ${maxDistance}`);
};

async function adventCode(filename) {
  try {
    const distances = await getCandidateDistances(filename);
    part1(distances);
    part2(distances);
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
