import fs from "node:fs";
import readline from "node:readline";
import { lightsInstruction, lightsInstruction_2 } from "./lights_grid.js";

const readFile = (filename) => {
  return readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    terminal: false,
  });
};

const createGrid = (n) => {
  return Array(n)
    .fill()
    .map(() => Array(n).fill(0));
};

const litLights = (grid) => {
  return grid.reduce(
    (sum, row) => sum + row.reduce((acc, val) => acc + val, 0),
    0
  );
};

const part1 = async (filename) => {
  const grid = createGrid(1000);
  const file = readFile(filename);
  for await (const line of file) {
    lightsInstruction(grid, line);
  }

  console.log(`1. ${litLights(grid)}`);
};

const part2 = async (filename) => {
  const grid = createGrid(1000);
  const file = readFile(filename);
  for await (const line of file) {
    lightsInstruction_2(grid, line);
  }
  console.log(`2. ${litLights(grid)}`);
};

function adventCode(filename) {
  try {
    part1(filename);
    part2(filename);
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
