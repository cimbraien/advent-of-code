import input from "./7input.json";

function uint16(n: number): number {
  return n & 0xffff;
}

function solution(input: string[]): number {
  let len = 0;
  const wires: Record<string, number> = {};
  function getVal(id: string): number {
    if (parseInt(id).toString() == id) return parseInt(id);
    return wires[id] ?? -1;
  }
  let i = 0;
  while (true) {
    i++;
    if (input.length == len) break;
    len = input.length;
    const next = [];
    for (let i = 0; i < len; i++) {
      const line = input[i];
      const [ins, id] = line.split("->").map((e) => e.trim());
      const insArr = ins.split(" ");
      const nums = [];
      if (insArr.length == 1) nums.push(insArr[0]);
      if (insArr.length == 2) nums.push(insArr[1]);
      if (insArr.length == 3) nums.push(...[insArr[0], insArr[2]]);
      if (!nums.every((n) => getVal(n) != -1)) {
        next.push(line);
        continue;
      }

      if (insArr.length == 1) {
        wires[id] = getVal(nums[0]);
        continue;
      }

      if (insArr[0] == "NOT") {
        wires[id] = uint16(~getVal(nums[0]));
        continue;
      }

      if (insArr[1] == "AND") {
        wires[id] = uint16(getVal(nums[0]) & getVal(nums[1]));
        continue;
      }

      if (insArr[1] == "OR") {
        wires[id] = uint16(getVal(nums[0]) | getVal(nums[1]));
        continue;
      }

      if (insArr[1] == "RSHIFT") {
        wires[id] = uint16(getVal(nums[0]) >>> getVal(nums[1]));
        continue;
      }

      if (insArr[1] == "LSHIFT") {
        wires[id] = uint16(getVal(nums[0]) << getVal(nums[1]));
        continue;
      }
    }
    input = next;
  }
  return getVal("a");
}

const solA = solution(input);

const inputB = input;
inputB[0] = `${solA} -> b`;
const solB = solution(inputB);

console.log(`A: ${solA}`);
console.log(`B: ${solB}`);
