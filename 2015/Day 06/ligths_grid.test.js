import { describe, test, expect } from "vitest";
import { lightsInstruction, lightsInstruction_2 } from "lights_grid";

const mockGrid = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

const mockGrid2 = [
  [2, 0, 0],
  [0, 2, 0],
  [0, 0, 2],
];

describe("lightsInstruction", () => {
  [
    [
      "turn on 1,1 through 2,2",
      [
        [1, 0, 0],
        [0, 1, 1],
        [0, 1, 1],
      ],
    ],
    [
      "turn off 1,1 through 2,2",
      [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
    [
      "toggle 1,1 through 2,2",
      [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0],
      ],
    ],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const grid = structuredClone(mockGrid);
      lightsInstruction(grid, input);
      expect(grid).toEqual(expected);
    });
  });
});

describe("lightsInstruction_2", () => {
  [
    [
      "turn on 1,1 through 2,2",
      [
        [2, 0, 0],
        [0, 3, 1],
        [0, 1, 3],
      ],
    ],
    [
      "turn off 1,1 through 2,2",
      [
        [2, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
    ],
    [
      "toggle 1,1 through 2,2",
      [
        [2, 0, 0],
        [0, 4, 2],
        [0, 2, 4],
      ],
    ],
  ].map(([input, expected]) => {
    test(`'${input}' produce result ${expected}`, () => {
      const grid = structuredClone(mockGrid2);
      lightsInstruction_2(grid, input);
      expect(grid).toEqual(expected);
    });
  });
});
