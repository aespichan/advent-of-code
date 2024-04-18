import { describe, test, expect } from "vitest";
import {
  codeRepresentationSize,
  inMemorySize,
  encodedSize,
} from "characters_count";

describe("codeRepresentationSize", () => {
  [
    ['""', 2],
    ['"abc"', 5],
    ['"aaa\\"aaa"', 10],
    ['"\\x27"', 6],
  ].map(([input, expected]) => {
    test(`input '${input}' produce result ${expected}`, () => {
      const count = codeRepresentationSize(input);
      expect(count).toBe(expected);
    });
  });
});

describe("inMemorySize", () => {
  [
    ['""', 0],
    ['"abc"', 3],
    ['"aaa\\"aaa"', 7],
    ['"\\x27"', 1],
  ].map(([input, expected]) => {
    test(`input '${input}' produce result ${expected}`, () => {
      const count = inMemorySize(input);
      expect(count).toBe(expected);
    });
  });
});

describe("encodedSize", () => {
  [
    ['""', 6],
    ['"abc"', 9],
    ['"aaa\\"aaa"', 16],
    ['"\\x27"', 11],
  ].map(([input, expected]) => {
    test(`input '${input}' produce result ${expected}`, () => {
      const count = encodedSize(input);
      expect(count).toBe(expected);
    });
  });
});
