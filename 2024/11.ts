import path from "path";
import { parseInputAsString } from "../utils/input";

const inputFilePath = path.join(import.meta.path, "..", "inputs", "11.txt");
const input = await parseInputAsString(inputFilePath);

let stones = input.split(" ").map((e) => parseInt(e));

function blink(stones: number[]): number[] {
  const newStones: number[] = [];
  const multipliedResults: Map<number, number> = new Map<number, number>();

  for (const stone of stones) {
    if (stone === 0) {
      newStones.push(1);
      continue;
    }

    const length = stone.toString().length;

    if (length % 2 === 1) {
      const cache = multipliedResults.get(stone);
      if (cache) {
        newStones.push(cache);
        continue;
      }
      const multiplied = stone * 2024;
      multipliedResults.set(stone, multiplied);
      newStones.push(multiplied);
      continue;
    }

    const strStone = stone.toString();
    const halfLength = length / 2;
    const leftPart = parseInt(strStone.slice(0, halfLength));
    const rightPart = parseInt(strStone.slice(halfLength));

    newStones.push(leftPart);
    newStones.push(rightPart);
  }

  return newStones;
}

for (let i = 0; i < 25; i++) {
  console.log(`#${i}`);
  stones = blink(stones);
}

console.log("Stone count:", stones.length);
