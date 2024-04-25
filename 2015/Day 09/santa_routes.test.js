import { describe, test, expect } from "vitest";
import SantaRoutes from "santa_routes";

describe("getPossibleDistances", () => {
  const input = [
    "London to Dublin = 464",
    "London to Belfast = 518",
    "Dublin to Belfast = 141",
  ];
  const expected = [982, 605, 659, 659, 605, 982];

  test(`input '${input}' produce result ${expected}`, () => {
    const routes = new SantaRoutes();
    input.forEach((line) => routes.addEdge(line));
    const distances = routes.possibleDistances();
    expect(distances.sort()).toEqual(expected.sort());
  });
});
