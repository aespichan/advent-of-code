import crypto from "node:crypto";

const completeMD5Hash = (input, zeroes) => {
  let num = 1;
  while (true) {
    const secretKey = `${input}${num}`;
    const hash = crypto.createHash("md5");
    hash.update(secretKey);
    if (hash.digest("hex").slice(0, zeroes) === "0".repeat(zeroes)) break;
    num += 1;
  }
  return num;
};

export { completeMD5Hash };
