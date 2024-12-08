import path from "path";
import { parseInputAs2DArray } from "../utils/input";

const rulesFilePath = path.join(import.meta.path, "..", "inputs", "5-rules.txt");
const updatesFilePath = path.join(import.meta.path, "..", "inputs", "5-updates.txt");

const rulesArr = await parseInputAs2DArray(rulesFilePath, "|");
const updates = await parseInputAs2DArray(updatesFilePath, ",");
const rulesMap: Map<string, string[]> = new Map();
for (const rule of rulesArr) {
  if (!rulesMap.has(rule[1])) rulesMap.set(rule[1], []);
  rulesMap.get(rule[1])?.push(rule[0]);
}

function isValid(update: string[]) {
  return update.every((n, i) => {
    if (!rulesMap.has(n)) return true;
    const before = rulesMap.get(n);
    return update.slice(i + 1).every((x) => !before?.includes(x));
  });
}

const validUpdates = updates.filter((update) => isValid(update));
const middleValSum = validUpdates.reduce(
  (a, update) => a + parseInt(update[Math.floor(update.length / 2)]),
  0,
);

console.log("Answer", middleValSum);

const invalidUpdates = updates.filter((update) => !isValid(update));
const correctedUpdates = invalidUpdates.map((update) => {
  while (!isValid(update)) {
    const i = update.findIndex((x, i) => {
      const before = rulesMap.get(x);
      return update.slice(i + 1).some((y) => before?.includes(y));
    });
    const n = update[i];
    const before = rulesMap.get(n);
    const lastIndex = update.findLastIndex((x) => before?.includes(x));
    if (lastIndex == -1) continue;
    update.splice(i, 1);
    update.splice(lastIndex, 0, n);
  }
  return update;
});

const middleValSum2 = correctedUpdates.reduce(
  (a, update) => a + parseInt(update[Math.floor(update.length / 2)]),
  0,
);

console.log("Answer 2", middleValSum2);
