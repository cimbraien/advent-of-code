import input from "./6input.json";

const grid = new Array(1000).fill(0).map((e) => new Array(1000).fill(0));

function solution(input: string[]): number {
  for (const instruction of input) {
    const action = instruction.startsWith("toggle")
      ? 0
      : instruction.startsWith("turn off")
      ? 1
      : 2;
    const arr = instruction.split(" ");
    const m: number[] = arr[action == 0 ? 1 : 2].split(",").map((e) => parseInt(e));
    const n: number[] = arr[action == 0 ? 3 : 4].split(",").map((e) => parseInt(e));
    for (let i = m[0]; i <= n[0]; i++) {
      for (let j = m[1]; j <= n[1]; j++) {
        if (action == 0) grid[i][j] = grid[i][j] == 0 ? 1 : 0;
        else grid[i][j] = action == 1 ? 0 : 1;
      }
    }
  }
  return grid.reduce((a, row) => {
    return a + row.filter((e) => e == 1).length;
  }, 0);
}

console.log(solution(input));
