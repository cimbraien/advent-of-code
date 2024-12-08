import path from "path";
import { parseInputAsArrays } from "../utils/input";

const inputFilePath = path.join(import.meta.path, "..", "inputs", "1.txt");
const input = await parseInputAsArrays(inputFilePath, "   ");
const parsedInput = input.map((list) => {
  const parsedList = list.map((id) => parseInt(id));
  parsedList.sort((a, b) => a - b);
  return parsedList;
});

let distance = 0;
for (let i = 0; i < parsedInput[0].length; i++) {
  distance += Math.abs(parsedInput[0][i] - parsedInput[1][i]);
}
console.log("Distance:", distance);

//part two
const map: Map<number, number> = new Map();
let similarity = 0;
for (let i = 0; i < parsedInput[0].length; i++) {
  const n = parsedInput[0][i];
  if (!map.has(n)) {
    const occ = parsedInput[1].filter((x) => x == n).length;
    map.set(n, n * occ);
  }
  similarity += map.get(n) || 0;
}
console.log("Similarity:", similarity);
