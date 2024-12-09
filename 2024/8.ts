import path from "path";
import { parseInputAs2DArray } from "../utils/input";

const inputFilePath = path.join(import.meta.path, "..", "inputs", "8.txt");
const input = await parseInputAs2DArray(inputFilePath, "");

const m = input.length;
const n = input[0].length;

const antinodes: Set<string> = new Set();
function addAntiNode(coord: [number, number]) {
  antinodes.add(`${coord[0]},${coord[1]}`);
}

const nodes: Map<string, [number, number][]> = new Map();
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    const node = input[i][j];
    if (node == ".") continue;
    if (!nodes.has(node)) nodes.set(node, []);
    nodes.get(node)?.push([i, j]);
  }
}

for (const node of nodes) {
  const coords = node[1];
  for (let i = 0; i < coords.length; i++) {
    for (let j = i + 1; j < coords.length; j++) {
      const a = coords[i];
      const b = coords[j];
      const iDiff = b[0] - a[0];
      const jDiff = b[1] - a[1];
      const anti1: [number, number] = [a[0] - iDiff, a[1] - jDiff];
      const anti2: [number, number] = [b[0] + iDiff, b[1] + jDiff];
      if (anti1[0] >= 0 && anti1[0] < m && anti1[1] >= 0 && anti1[1] < n) addAntiNode(anti1);
      if (anti2[0] >= 0 && anti2[0] < m && anti2[1] >= 0 && anti2[1] < n) addAntiNode(anti2);
    }
  }
}

console.log("Unique antinode positions:", antinodes.size);

for (const node of nodes) {
  const coords = node[1];
  for (let i = 0; i < coords.length; i++) {
    for (let j = i + 1; j < coords.length; j++) {
      const a = coords[i];
      const b = coords[j];
      const iDiff = b[0] - a[0];
      const jDiff = b[1] - a[1];
			addAntiNode(a);
			addAntiNode(b);

      let anti1: [number, number] = [a[0] - iDiff, a[1] - jDiff];
      let anti2: [number, number] = [b[0] + iDiff, b[1] + jDiff];
      while (anti1[0] >= 0 && anti1[0] < m && anti1[1] >= 0 && anti1[1] < n) {
        addAntiNode(anti1);
        anti1 = [anti1[0] - iDiff, anti1[1] - jDiff];
      }
      while (anti2[0] >= 0 && anti2[0] < m && anti2[1] >= 0 && anti2[1] < n) {
        addAntiNode(anti2);
        anti2 = [anti2[0] + iDiff, anti2[1] + jDiff];
      }
    }
  }
}

console.log("Unique resonant antinode positions:", antinodes.size);
