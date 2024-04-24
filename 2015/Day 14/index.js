import fs from "node:fs";
import readline from "node:readline";
import { Reindeer, ReindeerScoringSystem } from "./reindeer_olympics.js";

const readFile = (filename) => {
  return readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    terminal: false,
  });
};

const getReindeerDistances = async (filename, seconds) => {
  const file = readFile(filename);
  const distances = [];

  for await (const line of file) {
    const reindeer = new Reindeer(line);
    distances.push(reindeer.traveledDistanceInSeconds(seconds));
  }
  return distances;
};

const getReindeerPoints = async (filename, seconds) => {
  const file = readFile(filename);
  const scoringSystem = new ReindeerScoringSystem();

  for await (const line of file) scoringSystem.addReindeer(line);

  return scoringSystem.getPointsInSeconds(seconds);
};

const part1 = async (filename, seconds) => {
  const distances = await getReindeerDistances(filename, seconds);
  console.log(`1. ${Math.max(...distances)}`);
};

const part2 = async (filename, seconds) => {
  const points = await getReindeerPoints(filename, seconds);
  console.log(`2. ${Math.max(...Object.values(points))}`);
};

async function adventCode(filename) {
  try {
    const seconds = 2503;
    part1(filename, seconds);
    part2(filename, seconds);
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
