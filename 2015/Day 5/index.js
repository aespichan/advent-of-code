import fs from "node:fs";
import readline from "node:readline";
import { isNiceString, isNiceString_2 } from "./nice_strings.js";

const readFile = (filename) => {
  return readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    terminal: false,
  });
};

const part1 = async (filename) => {
  let result = 0;
  const file = readFile(filename);
  for await (const line of file) {
    result += isNiceString(line) ? 1 : 0;
  }
  console.log(`1. ${result}`);
};

const part2 = async (filename) => {
  let result = 0;
  const file = readFile(filename);
  for await (const line of file) {
    result += isNiceString_2(line) ? 1 : 0;
  }
  console.log(`2. ${result}`);
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
