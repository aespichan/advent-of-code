import { lookAndSay } from "./look_and_say.js";

const part1 = (input) => {
  for (let i = 0; i < 40; i++) input = lookAndSay(input);
  console.log(`1. ${input.length}`);
};

const part2 = (input) => {
  for (let i = 0; i < 50; i++) input = lookAndSay(input);
  console.log(`1. ${input.length}`);
};

async function adventCode() {
  try {
    part1("1321131112");
    part2("1321131112");
  } catch (err) {
    console.error(err);
  }
}

adventCode();
