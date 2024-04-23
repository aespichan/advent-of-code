import { describe, test, expect } from "vitest";
import CoporatePolicy from "corporate_policy";

describe("isValidPassword", () => {
  [
    ["hijklmmn", false],
    ["abbceffg", false],
    ["abbcegjk", false],
    ["abcdffaa", true],
    ["ghjaabcc", true],
  ].map(([input, expected]) => {
    test(`input '${input}' produce result ${expected}`, () => {
      const policy = new CoporatePolicy();
      expect(policy.isValidPassword(input)).toBe(expected);
    });
  });
});

describe("nextValidPassword", () => {
  [
    ["abcdefgh", "abcdffaa"],
    ["ghijklmn", "ghjaabcc"],
  ].map(([input, expected]) => {
    test(`input '${input}' produce result ${expected}`, () => {
      const policy = new CoporatePolicy();
      expect(policy.nextValidPassword(input)).toBe(expected);
    });
  });
});
