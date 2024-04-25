import { describe, test, expect } from "vitest";
import { presentsDelivering, roboSantaDelivering } from "presents_delivering";

describe("presentsDelivering", () => {
  [
    [">", 2],
    ["^>v<", 4],
    ["^v^v^v^v^v", 2],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const output = presentsDelivering(input);
      expect(output).toBe(expected);
    });
  });
});

describe("roboSantaDelivering", () => {
  [
    ["^v", 3],
    ["^>v<", 3],
    ["^v^v^v^v^v", 11],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const output = roboSantaDelivering(input);
      expect(output).toBe(expected);
    });
  });
});
