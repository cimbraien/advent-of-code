import path from "path";
import { parseInputAs2DArray } from "../utils/input";

const inputFilePath = path.join(import.meta.path, "..", "inputs", "4.txt");
const input = await parseInputAs2DArray(inputFilePath, "");

const m = input.length; //row length
const n = input[0].length; //col length

let count = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] != "X") continue;
    //> > > >
    if (j <= n - 4) {
      if (input[i][j + 1] + input[i][j + 2] + input[i][j + 3] == "MAS") count++;
    }

    //< < <
    if (j >= 3) {
      if (input[i][j - 1] + input[i][j - 2] + input[i][j - 3] == "MAS") count++;
    }

    //^ ^ ^
    if (i >= 3) {
      if (input[i - 1][j] + input[i - 2][j] + input[i - 3][j] == "MAS") count++;
    }

    //v v v
    if (i <= m - 4) {
      if (input[i + 1][j] + input[i + 2][j] + input[i + 3][j] == "MAS") count++;
    }

    //^> ^> ^>
    if (i >= 3 && j <= n - 4) {
      if (input[i - 1][j + 1] + input[i - 2][j + 2] + input[i - 3][j + 3] == "MAS") count++;
    }

    //^< ^< ^<
    if (i >= 3 && j >= 3) {
      if (input[i - 1][j - 1] + input[i - 2][j - 2] + input[i - 3][j - 3] == "MAS") count++;
    }

    //v> v> v>
    if (i <= m - 4 && j <= n - 4) {
      if (input[i + 1][j + 1] + input[i + 2][j + 2] + input[i + 3][j + 3] == "MAS") count++;
    }

    //v< v< v<
    if (i <= m - 4 && j >= 3) {
      if (input[i + 1][j - 1] + input[i + 2][j - 2] + input[i + 3][j - 3] == "MAS") count++;
    }
  }
}
console.log("Count:", count);

let count2 = 0;
for (let i = 1; i < m - 1; i++) {
  for (let j = 1; j < n - 1; j++) {
    if (input[i][j] != "A") continue;
    const a = input[i - 1][j - 1];
    const b = input[i - 1][j + 1];
    const c = input[i + 1][j - 1];
    const d = input[i + 1][j + 1];
    if (![a, b, c, d].every((s) => s == "M" || s == "S")) continue;
    if (a == d) continue;
    if (b == c) continue;
    count2++;
  }
}

console.log("Count 2:", count2);
