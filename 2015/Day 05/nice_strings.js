const isNiceString = (input) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const forbidden = new Set(["ab", "cd", "pq", "xy"]);
  let numVowels = 0;
  let hasRepeated = false;

  for (let i = 0; i < input.length; i++) {
    if (vowels.has(input[i])) numVowels++;
    if (i + 1 < input.length) {
      if (input[i] == input[i + 1]) hasRepeated = true;
      if (forbidden.has(input.substring(i, i + 2))) return false;
    }
  }

  return numVowels >= 3 && hasRepeated;
};

const isNiceString_2 = (input) => {
  let pairs = {};
  let hasRepeatedBetween = false;
  let hasRepeatedPair = false;

  for (let i = 0; i < input.length - 1; i++) {
    if (i + 2 < input.length && input[i] == input[i + 2])
      hasRepeatedBetween = true;

    let pair = input.substring(i, i + 2);
    if (pair in pairs) {
      hasRepeatedPair ||= pairs[pair] != i - 1;
    } else {
      pairs[pair] = i;
    }
  }

  return hasRepeatedPair && hasRepeatedBetween;
};

export { isNiceString, isNiceString_2 };
