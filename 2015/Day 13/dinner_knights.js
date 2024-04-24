class DinnerKnights {
  constructor() {
    this.graph = {};
  }

  addEdge(sentence) {
    sentence = sentence.replace("gain ", "");
    sentence = sentence.replace("lose ", "-");
    sentence = sentence.replace("would", "/");
    sentence = sentence.replace(".", "");
    sentence = sentence.replace("happiness units by sitting next to", "/");
    const [person1, happiness, person2] = sentence.split(" / ");

    if (!(person1 in this.graph)) {
      this.graph[person1] = {};
    }
    this.graph[person1][person2] = Number(happiness);
    this.people = Object.keys(this.graph);
  }

  calculateHappiness(positions, includeMyself) {
    const totalHappiness = [];
    for (let i = 0; i < positions.length; i++) {
      let per1 = positions[i];
      let per2 = i > 0 ? positions[i - 1] : positions[positions.length - 1];
      let happiness = this.graph[per1][per2] + this.graph[per2][per1];
      totalHappiness.push(happiness);
    }

    if (includeMyself) {
      let maxHappiness = 0;
      for (let i = 0; i < totalHappiness.length; i++) {
        let possibleHappiness = totalHappiness.reduce(
          (sum, item, ix) => (ix !== i ? sum + item : sum),
          0
        );

        maxHappiness = Math.max(maxHappiness, possibleHappiness);
      }
      return maxHappiness;
    } else {
      return totalHappiness.reduce((sum, item) => sum + item, 0);
    }
  }

  bt(positions, seen, maxHappiness, includeMyself) {
    if (positions.length === this.people.length) {
      return this.calculateHappiness(positions, includeMyself);
    }

    for (let person of this.people) {
      if (!seen.has(person)) {
        seen.add(person);
        positions.push(person);

        maxHappiness = Math.max(
          maxHappiness,
          this.bt(positions, seen, maxHappiness, includeMyself)
        );

        positions.pop();
        seen.delete(person);
      }
    }
    return maxHappiness;
  }

  maximizeHappiness({ includeMyself = false } = {}) {
    return this.bt([], new Set(), 0, includeMyself);
  }
}

export default DinnerKnights;
