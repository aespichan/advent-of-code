const presentsDelivering = (input) => {
  let seen = new Set();
  let houses = 1;
  let currPos = [0, 0];
  seen.add(currPos.toString());

  for (const dir of input) {
    if (dir === "^") currPos[1] += 1;
    else if (dir === "v") currPos[1] -= 1;
    else if (dir === ">") currPos[0] += 1;
    else if (dir === "<") currPos[0] -= 1;

    if (!seen.has(currPos.toString())) houses++;
    seen.add(currPos.toString());
  }
  return houses;
};

const roboSantaDelivering = (input) => {
  let seen = new Set();
  let houses = 1;
  let currPos = [
    [0, 0], // santa
    [0, 0], // robo-santa
  ];
  seen.add(currPos[0].toString());

  for (let i = 0; i < input.length; i++) {
    const ix = i % 2;
    if (input[i] === "^") currPos[ix][1] += 1;
    else if (input[i] === "v") currPos[ix][1] -= 1;
    else if (input[i] === ">") currPos[ix][0] += 1;
    else if (input[i] === "<") currPos[ix][0] -= 1;

    if (!seen.has(currPos[ix].toString())) houses++;
    seen.add(currPos[ix].toString());
  }
  return houses;
};

export { presentsDelivering, roboSantaDelivering };
