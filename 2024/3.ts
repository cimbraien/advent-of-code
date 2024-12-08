import path from "path";
import { parseInputAsString } from "../utils/input";

const inputFilePath = path.join(import.meta.path, "..", "inputs", "3.txt");
const input = await parseInputAsString(inputFilePath);

const regex = new RegExp(/mul\([0-9]{1,3},[0-9]{1,3}\)/g);

function mul(instruction: string) {
  const nums = instruction
    .slice(4, -1)
    .split(",")
    .map((n) => parseInt(n));
  return nums[0] * nums[1];
}

const result = input.match(regex)?.reduce((a, b) => {
  return a + mul(b);
}, 0);

console.log("Answer:", result);

const regex2 = new RegExp(/mul\([0-9]{1,3},[0-9]{1,3}\)|do\(\)|don't\(\)/g);
const instructions = input.match(regex2);
let enabled = true;
let result2 = 0;
for (let i = 0; i < instructions!.length; i++) {
  const instruction = instructions![i];
  if (instruction == "do()") {
    enabled = true;
    continue;
  }
  if (instruction == "don't()") {
    enabled = false;
    continue;
  }
  if (!enabled) continue;
  result2 += mul(instruction);
}

console.log("Answer 2:", result2);
