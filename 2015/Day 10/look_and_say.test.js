import { describe, test, expect } from "vitest";
import { lookAndSay } from "look_and_say";

describe("lookAndSay", () => {
  [
    ["1", "11"],
    ["11", "21"],
    ["21", "1211"],
    ["1211", "111221"],
    ["111221", "312211"],
  ].map(([input, expected]) => {
    test(`input '${input}' produce result ${expected}`, () => {
      expect(lookAndSay(input)).toBe(expected);
    });
  });
});
