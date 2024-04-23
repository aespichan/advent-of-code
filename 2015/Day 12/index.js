import fs from "node:fs";
import AccountingElves from "./accounting_elves.js";

const part1 = (accounting) => {
  console.log(`1. ${accounting.getBalance()}`);
};

const part2 = (accounting) => {
  console.log(`2. ${accounting.getBalance({ ignore: "red" })}`);
};

function adventCode(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const accounting = new AccountingElves(data);
    part1(accounting);
    part2(accounting);
  });
}

if (process.argv.length < 3) {
  console.log("Usage: node index.js <filename>");
} else {
  const filename = process.argv[2];
  adventCode(filename);
}
