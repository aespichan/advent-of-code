import fs from "node:fs";
import { completeMD5Hash } from "./advent_coins.js";

const part1 = (data) => {
  console.log(`1. ${completeMD5Hash(data, 5)}`);
};

const part2 = (data) => {
  console.log(`2. ${completeMD5Hash(data, 6)}`);
};

function adventCode(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    part1(data);
    part2(data);
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
