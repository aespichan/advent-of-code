import { describe, test, expect } from "vitest";
import { Reindeer, ReindeerScoringSystem } from "reindeer_olympics";

describe("reindeer traveledDistanceInSeconds", () => {
  [
    [
      "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.",
      1120,
    ],
    [
      "Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.",
      1056,
    ],
  ].map(([input, expected]) => {
    test(`input '${input}' produce result ${expected}`, () => {
      const reindeer = new Reindeer(input);
      const distance = reindeer.traveledDistanceInSeconds(1000);
      expect(distance).toBe(expected);
    });
  });
});

describe("ReindeerScoringSystem", () => {
  const input = [
    "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.",
    "Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.",
  ];
  const expected = { Comet: 312, Dancer: 689 };
  test(`input '${input}' produce result ${expected}`, () => {
    const scoringSystem = new ReindeerScoringSystem();
    for (let line of input) scoringSystem.addReindeer(line);
    const output = scoringSystem.getPointsInSeconds(1000);
    expect(output).toEqual(expected);
  });
});
