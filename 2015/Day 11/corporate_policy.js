class CoporatePolicy {
  constructor() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    this.numLetters = letters.length;
    this.letterToPos = {};
    this.posToLetter = {};
    letters.split("").forEach((letter, ix) => {
      this.letterToPos[letter] = ix;
      this.posToLetter[ix] = letter;
    });
  }

  isValidPassword(input) {
    const invalidLetters = new Set(["i", "o", "l"]);
    const pairs = new Set();
    let maxConsecutiveSeq = 1;
    let consecutiveSeq = 1;

    for (let i = 0; i < input.length; i++) {
      if (invalidLetters.has(input[i])) return false;
      if (i > 0) {
        if (input[i] === input[i - 1] && !pairs.has(i - 1)) pairs.add(i);
        if (this.letterToPos[input[i]] === this.letterToPos[input[i - 1]] + 1) {
          consecutiveSeq += 1;
        } else {
          consecutiveSeq = 1;
        }
      }
      maxConsecutiveSeq = Math.max(maxConsecutiveSeq, consecutiveSeq);
    }

    return maxConsecutiveSeq >= 3 && pairs.size >= 2;
  }

  nextCandidatePassword(input) {
    let i = input.length - 1;
    while (i >= 0) {
      let letter = input[i];
      let pos = (this.letterToPos[letter] + 1) % this.numLetters;
      input[i] = this.posToLetter[pos];
      i -= 1;
      if (letter !== "z") break;
    }
  }

  nextValidPassword(input) {
    input = input.split("");
    this.nextCandidatePassword(input);
    while (!this.isValidPassword(input)) {
      this.nextCandidatePassword(input);
    }
    return input.join("");
  }
}

export default CoporatePolicy;
