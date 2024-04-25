import { describe, test, expect } from "vitest";
import CircuitAssembler from "circuit_assembling";

describe("CircuitAssembler", () => {
  [
    [["123 -> a"], 123],
    [["123 -> x", "x LSHIFT 2 -> a"], 492],
    [["456 -> x", "x RSHIFT 2 -> a"], 114],
    [["123 -> x", "NOT x -> a"], 65412],
    [["123 -> x", "456 -> y", "x AND y -> a"], 72],
    [["123 -> x", "456 -> y", "x OR y -> a"], 507],
    [["x LSHIFT 2 -> a", "123 -> x"], 492],
    [["x AND y -> a", "123 -> x", "456 -> y"], 72],
  ].map(([inputs, expected]) => {
    test(`input '${inputs}' produce result ${expected}`, () => {
      const assembler = new CircuitAssembler();
      inputs.forEach((input) => assembler.assemble(input));
      expect(assembler.graph["a"].value).toBe(expected);
    });
  });
});
