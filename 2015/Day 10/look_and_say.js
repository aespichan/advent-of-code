const lookAndSay = (input) => {
  let currNum = "";
  let times = 0;
  let output = "";

  for (let num of input) {
    if (num !== currNum) {
      if (times > 0) output += `${times}${currNum}`;
      currNum = num;
      times = 1;
    } else {
      times += 1;
    }
  }
  output += `${times}${currNum}`;

  return output;
};

export { lookAndSay };
