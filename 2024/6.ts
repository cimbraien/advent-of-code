import path from "path";
import { parseInputAs2DArray } from "../utils/input";

const mazeFilePath = path.join(import.meta.path, "..", "inputs", "6.txt");
const maze = await parseInputAs2DArray(mazeFilePath, "");

const m = maze.length; //row length
const n = maze[0].length; //col length

let dir = 0;
const move = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const startI = maze.findIndex((row) => row.includes("^"));
const startJ = maze[startI].findIndex((col) => col == "^");
let i = startI;
let j = startJ;

const set: Set<string> = new Set();
function addPos() {
  set.add(`${i},${j}`);
}
addPos();
while (true) {
  let next = [i + move[dir][0], j + move[dir][1]];
  if (next[0] < 0 || next[0] >= m) break;
  if (next[1] < 0 || next[1] >= n) break;
  while (maze[next[0]][next[1]] == "#") {
    dir++;
    if (dir == 4) dir = 0;
    next = [i + move[dir][0], j + move[dir][1]];
    if (next[0] < 0 || next[0] >= m) break;
    if (next[1] < 0 || next[1] >= n) break;
  }
  i = next[0];
  j = next[1];
  addPos();
}

console.log("Distinct positions:", set.size);

//part two
let positions = 0;
for (let k = 0; k < m; k++) {
  for (let l = 0; l < n; l++) {
    i = startI;
    j = startJ;
    dir = 0;
    if (maze[k][l] == "#") continue;
    if (k == i && l == j) continue;
    let count = 0;
    while (true) {
      count++;
      if (count > m * n) {
        positions++;
        break;
      }
      let next = [i + move[dir][0], j + move[dir][1]];
      if (next[0] < 0 || next[0] >= m) break;
      if (next[1] < 0 || next[1] >= n) break;
      while (maze[next[0]][next[1]] == "#" || (next[0] == k && next[1] == l)) {
        dir++;
        if (dir == 4) dir = 0;
        next = [i + move[dir][0], j + move[dir][1]];
        if (next[0] < 0 || next[0] >= m) break;
        if (next[1] < 0 || next[1] >= n) break;
      }
      i = next[0];
      j = next[1];
    }
  }
}

console.log("Possible obstacle positions:", positions);
