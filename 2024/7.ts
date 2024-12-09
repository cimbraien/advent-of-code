import path from "path";
import { parseInputAsArray } from "../utils/input";

const inputFilePath = path.join(import.meta.path, "..", "inputs", "7.txt");
const input = await parseInputAsArray(inputFilePath);

const calibrations: [number, number[]][] = input.map((row) => {
  const arr = row.split(":");
  return [
    parseInt(arr[0]),
    arr[1]
      .trim()
      .split(" ")
      .map((e) => parseInt(e)),
  ];
});

function isValid(calibration: [number, number[]]): boolean {
  const [n, digits] = calibration;
  let valid = false;

  function dfs(acc: number, arr: number[]) {
    if (valid) return;
    if (arr.length == 0) {
      if (acc == n) valid = true;
      return;
    }
    if (acc > n) return;

    const next = arr[0];
    dfs(acc + next, arr.slice(1));
    dfs(acc * next, arr.slice(1));
  }
  dfs(digits[0], digits.slice(1));

  return valid;
}

const validCalibrations = calibrations.filter((calibration) => isValid(calibration));
const totalCalibration = validCalibrations.reduce((a, b) => a + b[0], 0);

console.log("Total calibration:", totalCalibration);

function isValid2(calibration: [number, number[]]): boolean {
  const [n, digits] = calibration;
  let valid = false;

  function dfs(acc: number, arr: number[]) {
    if (valid) return;
    if (arr.length == 0) {
      if (acc == n) valid = true;
      return;
    }
    if (acc > n) return;

    const next = arr[0];
    dfs(acc + next, arr.slice(1));
    dfs(acc * next, arr.slice(1));
    dfs(parseInt(acc.toString() + next.toString()), arr.slice(1));
  }
  dfs(digits[0], digits.slice(1));

  return valid;
}

const validCalibrations2 = calibrations.filter((calibration) => isValid2(calibration));
const totalCalibration2 = validCalibrations2.reduce((a, b) => a + b[0], 0);

console.log("Total calibration 2:", totalCalibration2);
