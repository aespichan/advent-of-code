import fs from "node:fs";
import readline from "node:readline";
import CircuitAssembler from "./circuit_assembling.js";

const readFile = (filename) => {
  return readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    terminal: false,
  });
};

const part1 = async (filename, circuitAssembler) => {
  const file = readFile(filename);
  for await (const line of file) {
    circuitAssembler.assemble(line);
  }
  console.log(`1. ${circuitAssembler.graph["a"].value}`);
};

const part2 = (circuitAssembler) => {
  circuitAssembler.assemble(`${circuitAssembler.graph["a"].value} -> b`);
  console.log(`2. ${circuitAssembler.graph["a"].value}`);
};

async function adventCode(filename) {
  try {
    const circuitAssembler = new CircuitAssembler();

    await part1(filename, circuitAssembler); // 46065
    part2(circuitAssembler);
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
