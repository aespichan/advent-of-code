class Node {
  constructor() {
    this.children = [];
    this.parents = [];
    this.value = null;
    this.operation = "";
  }
}

class CircuitAssembler {
  constructor() {
    this.graph = {};
  }

  translateOperand(operand) {
    if (!isNaN(operand)) {
      return Number(operand);
    } else {
      return !(operand in this.graph) ? null : this.graph[operand].value;
    }
  }

  translateInstruction(input) {
    let [left, right] = input.split(" -> ");
    left = left.split(" ");
    let operands = [];
    let operation = "";

    if (left.length === 1) {
      operands = [left[0]];
      operation = "EQ";
    } else if (left.length === 2) {
      operands = [left[1]];
      operation = left[0];
    } else if (left.length === 3) {
      operands = [left[0], left[2]];
      operation = left[1];
    }

    return { key: right.trim(), operands, operation };
  }

  calculateOutput(operands, operation) {
    operands = operands.map((op) => this.translateOperand(op));
    if (operands.some((op) => op === null)) return null;

    switch (operation) {
      case "EQ":
        return operands[0];
      case "NOT":
        return ~operands[0] & 65535;
      case "AND":
        return operands[0] & operands[1];
      case "OR":
        return operands[0] | operands[1];
      case "LSHIFT":
        return operands[0] << operands[1];
      case "RSHIFT":
        return operands[0] >> operands[1];
    }
  }

  deepUpdate(key, history) {
    const node = this.graph[key];
    const value = this.calculateOutput(node.parents, node.operation);

    if (value !== null && (!(key in history) || value !== history[key])) {
      node.value = value;
      history[key] = value;
      node.children.forEach((child) => this.deepUpdate(child, history));
    }
  }

  assemble(input) {
    const { key, operands, operation } = this.translateInstruction(input);

    const node = key in this.graph ? this.graph[key] : new Node();
    node.parents = operands;
    node.operation = operation;
    this.graph[key] = node;

    operands
      .filter((op) => typeof op === "string")
      .forEach((op) => {
        const parent = op in this.graph ? this.graph[op] : new Node();
        parent.children.push(key);
        this.graph[op] = parent;
      });

    const history = {};
    this.deepUpdate(key, history);
  }
}

export default CircuitAssembler;
