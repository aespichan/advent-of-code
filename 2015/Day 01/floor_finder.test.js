import { describe, test, expect } from "vitest";
import { floorFinder, firstTimeBasement } from "floor_finder";

describe("floorFinder", () => {
  [
    ["(", 1],
    [")", -1],
    ["(())", 0],
    ["()()", 0],
    ["(((", 3],
    ["(()(()(", 3],
    ["))(((((", 3],
    ["())", -1],
    ["))(", -1],
    [")))", -3],
    [")())())", -3],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const output = floorFinder(input);
      expect(output).toBe(expected);
    });
  });
});

describe("firstTimeBasement", () => {
  [
    ["(", -1],
    [")", 1],
    ["(())", -1],
    ["())", 3],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const output = firstTimeBasement(input);
      expect(output).toBe(expected);
    });
  });
});
