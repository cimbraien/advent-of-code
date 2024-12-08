import path from "path";
import { parseInputAsArray } from "../utils/input";

const inputFilePath = path.join(import.meta.path, "..", "inputs", "2.txt");
const input = await parseInputAsArray(inputFilePath);
const parsedInput = input.map((report) => report.split(" ").map((e) => parseInt(e)));

function isSafe(report: number[]) {
  if (report[1] == report[0]) return false;
  const increasing = report[1] - report[0] > 0;
  for (let i = 1; i < report.length; i++) {
    if (increasing && report[i] < report[i - 1]) return false;
    if (!increasing && report[i] > report[i - 1]) return false;
    const diff = Math.abs(report[i] - report[i - 1]);
    if (diff < 1 || diff > 3) return false;
  }
  return true;
}

const safeReports = parsedInput.filter((report) => isSafe(report));

console.log("Safe report count:", safeReports.length);

const safeReports2 = parsedInput.filter((report) => {
  if (isSafe(report)) return true;
  return report.some((_, i) => {
    const dampened = [...report];
    dampened.splice(i, 1);
    return isSafe(dampened);
  });
});

console.log("Safe report (dampened):", safeReports2.length);
