const codeRepresentationSize = (str) => {
  return str.length;
};

const inMemorySize = (str) => {
  return eval(str).length;
};

const encodedSize = (str) => {
  let new_str = '"';
  for (let c of str) {
    if (c === '"') new_str += '\\"';
    else if (c === "\\") new_str += "\\\\";
    else new_str += c;
  }
  new_str += '"';
  return new_str.length;
};

export { codeRepresentationSize, inMemorySize, encodedSize };
