import fs from "node:fs";
import {
  presentsDelivering,
  roboSantaDelivering,
} from "./presents_delivering.js";

const part1 = (data) => {
  console.log(`1. ${presentsDelivering(data)}`);
};

const part2 = (data) => {
  console.log(`2. ${roboSantaDelivering(data)}`);
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
