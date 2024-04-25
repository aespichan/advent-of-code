import { describe, test, expect } from "vitest";
import { wrappingPaper, wrappingRibbon } from "wrapping_paper";

describe("wrappingPaper", () => {
  [
    ["2x3x4", 58],
    ["1x1x10", 43],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const output = wrappingPaper(input);
      expect(output).toBe(expected);
    });
  });
});

describe("wrappingRibbon", () => {
  [
    ["2x3x4", 34],
    ["1x1x10", 14],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const output = wrappingRibbon(input);
      expect(output).toBe(expected);
    });
  });
});
