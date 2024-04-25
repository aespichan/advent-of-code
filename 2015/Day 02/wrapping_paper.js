const wrappingPaper = (input) => {
  const [l, w, h] = input.split("x");
  const sides = [l * w, w * h, l * h];
  const minSide = Math.min(...sides);
  return minSide + sides.reduce((accum, side) => accum + 2 * side, 0);
};

const wrappingRibbon = (input) => {
  const [l, w, h] = input.split("x");
  const perimeters = [2 * l + 2 * w, 2 * w + 2 * h, 2 * l + 2 * h];
  const minPerimeter = Math.min(...perimeters);
  return minPerimeter + l * w * h;
};

export { wrappingPaper, wrappingRibbon };
