import { describe, test, expect } from "vitest";
import AccountingElves from "accounting_elves";

describe("getBalance", () => {
  [
    ["[1,2,3]", 6],
    ['{"a":2,"b":4}', 6],
    ["[[[3]]]", 3],
    ['{"a":{"b":4},"c":-1}', 3],
    ['{"a":[-1,1]}', 0],
    ['[-1,{"a":1}]', 0],
    ["[]", 0],
    ["{}", 0],
  ].map(([input, expected]) => {
    test(`input '${input}' produce result ${expected}`, () => {
      const accounting = new AccountingElves(input);
      expect(accounting.getBalance()).toBe(expected);
    });
  });
});

describe("getBalance ignoring red", () => {
  [
    ["[1,2,3]", 6],
    ['[1,{"c":"red","b":2},3]', 4],
    ['{"d":"red","e":[1,2,3,4],"f":5}', 0],
    ['[1,"red",5]', 6],
  ].map(([input, expected]) => {
    test(`input '${input}' produce result ${expected}`, () => {
      const accounting = new AccountingElves(input);
      expect(accounting.getBalance({ ignore: "red" })).toBe(expected);
    });
  });
});
