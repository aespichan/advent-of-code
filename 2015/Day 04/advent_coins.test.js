import { describe, test, expect } from "vitest";
import { completeMD5Hash } from "advent_coins";

describe("completeMD5Hash", () => {
  [
    ["abcdef", 5, 609043],
    ["pqrstuv", 5, 1048970],
  ].map(([input, zeroes, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const output = completeMD5Hash(input, zeroes);
      expect(output).toBe(expected);
    });
  });
});
