import CorporatePolicy from "./corporate_policy.js";

const part1 = (input) => {
  const policy = new CorporatePolicy();
  console.log(`1. ${policy.nextValidPassword(input)}`);
};

const part2 = (input) => {
  const policy = new CorporatePolicy();
  input = policy.nextValidPassword(input);
  console.log(`2. ${policy.nextValidPassword(input)}`);
};

async function adventCode() {
  try {
    const input = "hxbxwxba";
    part1(input);
    part2(input);
  } catch (err) {
    console.error(err);
  }
}

adventCode();
