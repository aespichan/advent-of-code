class Reindeer {
  constructor(input) {
    this.translateInput(input);
  }

  translateInput(input) {
    input = input.replace(" can fly ", " - ");
    input = input.replace(" km/s for ", " - ");
    input = input.replace(" seconds, but then must rest for ", " - ");
    input = input.replace(" seconds.", "");
    input = input.split(" - ");

    this.name = input[0];
    this.velocity = Number(input[1]);
    this.flyTime = Number(input[2]);
    this.restTime = Number(input[3]);
  }

  traveledDistanceInSeconds(seconds) {
    const flyRestTime = this.flyTime + this.restTime;
    const slices = Math.floor(seconds / flyRestTime);
    const remainder = Math.min(seconds % flyRestTime, this.flyTime);

    return slices * (this.velocity * this.flyTime) + remainder * this.velocity;
  }
}

class ReindeerScoringSystem {
  constructor() {
    this.reindeers = {};
  }

  addReindeer(input) {
    const reindeer = new Reindeer(input);
    this.reindeers[reindeer.name] = reindeer;
  }

  getPointsInSeconds(seconds) {
    const points = {};
    const reindeerNames = Object.keys(this.reindeers);
    for (let name of reindeerNames) points[name] = 0;

    for (let i = 1; i <= seconds; i++) {
      let distance = {};
      let maxDistance = 0;
      reindeerNames.forEach((name) => {
        distance[name] = this.reindeers[name].traveledDistanceInSeconds(i);
        maxDistance = Math.max(maxDistance, distance[name]);
      });
      reindeerNames.forEach((name) => {
        points[name] += distance[name] === maxDistance ? 1 : 0;
      });
    }
    return points;
  }
}

export { Reindeer, ReindeerScoringSystem };
