import { describe, test, expect } from "vitest";
import { isNiceString, isNiceString_2 } from "nice_strings";

describe("isNiceString", () => {
  [
    ["ugknbfddgicrmopn", true],
    ["aaa", true],
    ["jchzalrnumimnmhp", false],
    ["haegwjzuvuyypxyu", false],
    ["dvszwmarrgswjxmb", false],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const output = isNiceString(input);
      expect(output).toBe(expected);
    });
  });
});

describe("isNiceString_2", () => {
  [
    ["qjhvhtzxzqqjkmpb", true],
    ["xxyxx", true],
    ["uurcxstgmygtbstg", false],
    ["ieodomkazucvgmuy", false],
    ["aaaa", true],
    ["aaabcb", false],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const output = isNiceString_2(input);
      expect(output).toBe(expected);
    });
  });
});
