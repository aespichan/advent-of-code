import fs from "node:fs";
import readline from "node:readline";
import {
  codeRepresentationSize,
  inMemorySize,
  encodedSize,
} from "./characters_count.js";

const readFile = (filename) => {
  return readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    terminal: false,
  });
};

const part1 = async (filename) => {
  const file = readFile(filename);
  let count = 0;
  for await (const line of file) {
    count += codeRepresentationSize(line) - inMemorySize(line);
  }
  console.log(`1. ${count}`);
};

const part2 = async (filename) => {
  const file = readFile(filename);
  let count = 0;
  for await (const line of file) {
    count += encodedSize(line) - codeRepresentationSize(line);
  }
  console.log(`2. ${count}`);
};

async function adventCode(filename) {
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
