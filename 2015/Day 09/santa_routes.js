class SantaRoutes {
  constructor() {
    this.graph = {};
  }

  addNeighbor(node, neighbor, distance) {
    if (!(node in this.graph)) {
      this.graph[node] = {};
    }
    this.graph[node][neighbor] = Number(distance);
  }

  addEdge(input) {
    const [left, distance] = input.split(" = ");
    const [node1, node2] = left.split(" to ");

    this.addNeighbor(node1, node2, distance);
    this.addNeighbor(node2, node1, distance);
  }

  bt(missingCities, prevCity, distance, distances) {
    if (missingCities.size === 0) {
      distances.push(distance);
      return;
    }

    for (let city of Object.keys(this.graph)) {
      if (missingCities.has(city)) {
        const newDistance = prevCity ? this.graph[prevCity][city] : 0;

        missingCities.delete(city);
        distance += newDistance;

        this.bt(missingCities, city, distance, distances);

        distance -= newDistance;
        missingCities.add(city);
      }
    }
  }

  possibleDistances() {
    const missingCities = new Set(Object.keys(this.graph));
    const distances = [];
    this.bt(missingCities, null, 0, distances);
    return distances;
  }
}

export default SantaRoutes;
