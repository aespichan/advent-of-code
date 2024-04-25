const lightsInstruction = (grid, input) => {
  const regex = /[a-z ]+/g;
  const instruction = input.match(regex)[0].trim();
  const coords = input.replace(regex, " ").trim().split(" ");
  const start = coords[0].split(",").map((val) => Number(val));
  const end = coords[1].split(",").map((val) => Number(val));

  for (let row = start[0]; row <= end[0]; row++) {
    for (let col = start[1]; col <= end[1]; col++) {
      if (instruction === "turn on") {
        grid[row][col] = 1;
      } else if (instruction === "turn off") {
        grid[row][col] = 0;
      } else if (instruction === "toggle") {
        grid[row][col] = 1 - grid[row][col];
      }
    }
  }
};

const lightsInstruction_2 = (grid, input) => {
  const regex = /[a-z ]+/g;
  const instruction = input.match(regex)[0].trim();
  const coords = input.replace(regex, " ").trim().split(" ");
  const start = coords[0].split(",").map((val) => Number(val));
  const end = coords[1].split(",").map((val) => Number(val));

  for (let row = start[0]; row <= end[0]; row++) {
    for (let col = start[1]; col <= end[1]; col++) {
      if (instruction === "turn on") {
        grid[row][col] += 1;
      } else if (instruction === "turn off") {
        grid[row][col] = Math.max(grid[row][col] - 1, 0);
      } else if (instruction === "toggle") {
        grid[row][col] += 2;
      }
    }
  }
};

export { lightsInstruction, lightsInstruction_2 };
