const floorFinder = (input) => {
  return Array.from(input).reduce(
    (accum, parenthesis) => accum + (parenthesis === "(" ? 1 : -1),
    0
  );
};

const firstTimeBasement = (input) => {
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    floor += input[i] === "(" ? 1 : -1;
    if (floor < 0) {
      return i + 1;
    }
  }
  return -1;
};

export { floorFinder, firstTimeBasement };
