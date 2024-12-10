import path from "path";
import { parseInputAs2DArray } from "../utils/input";

const inputFilePath = path.join(import.meta.path, "..", "inputs", "10.txt");
const input = await parseInputAs2DArray(inputFilePath, "");

const m = input.length;
const n = input[0].length;

function getScore(start: [number, number]): { unique: number; rating: number } {
  const set = new Set();
  let rating = 0;
  function dfs(x: number, i: number, j: number) {
    if (x == 9) {
      set.add(`${i},${j}`);
      rating++;
      return;
    }
    const next = x + 1;
    if (i < m - 1 && input[i + 1][j] === next.toString()) dfs(next, i + 1, j);
    if (i > 0 && input[i - 1][j] === next.toString()) dfs(next, i - 1, j);
    if (j < n - 1 && input[i][j + 1] === next.toString()) dfs(next, i, j + 1);
    if (j > 0 && input[i][j - 1] === next.toString()) dfs(next, i, j - 1);
  }
  dfs(0, start[0], start[1]);
  return { unique: set.size, rating };
}

let uniqueScore = 0;
let rating = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] != "0") continue;
    const score = getScore([i, j]);
    uniqueScore += score.unique;
    rating += score.rating;
  }
}

console.log("Score:", uniqueScore);
console.log("Rating:", rating);
