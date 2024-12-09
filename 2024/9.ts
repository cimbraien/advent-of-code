import path from "path";
import { parseInputAsString } from "../utils/input";

const inputFilePath = path.join(import.meta.path, "..", "inputs", "9.txt");
const input = await parseInputAsString(inputFilePath);

let id = 0;
const file = [];

let isFree = false;
for (const char of input) {
  const size = parseInt(char);
  if (isFree) {
    for (let i = 0; i < size; i++) {
      file.push(".");
    }
  } else {
    for (let i = 0; i < size; i++) {
      file.push(id.toString());
    }
    id++;
  }
  isFree = !isFree;
}

const file2 = [...file];

let l = 0;
let r = file.length - 1;
while (l < r) {
  if (file[l] != ".") {
    l++;
    continue;
  }
  if (file[r] == ".") {
    r--;
    continue;
  }
  file[l] = file[r];
  file[r] = ".";
}

let checkSum = 0;
for (let i = 0; i < file.length; i++) {
  const id = file[i];
  if (id == ".") break;
  checkSum += parseInt(id) * i;
}

console.log("Checksum:", checkSum);

//part two
//it works but too slow
r = file2.length - 1;
for (; r > 0; r--) {
  const id2 = file2[r];
  if (id2 == ".") continue;
  const blockSize = r - file2.slice(0, r + 1).findIndex((id) => id == id2) + 1;
	//perf idea: use regex to find first block that has minimum blockSize
  for (let l = 0; l < r - blockSize + 1; l++) {
    const id = file2[l];
    if (id != ".") continue;
    const freeSpace = file2.slice(l).findIndex((id) => id != ".");
    if (blockSize > freeSpace) {
      l += blockSize - 1;
      continue;
    }
    file2.splice(l, blockSize, ...new Array(blockSize).fill(id2));
    file2.splice(r - blockSize + 1, blockSize, ...new Array(blockSize).fill("."));
    break;
  }
  r -= blockSize - 1;
}

let checkSum2 = 0;
for (let i = 0; i < file2.length; i++) {
  const id = file2[i];
  if (id == ".") continue;
  checkSum2 += parseInt(id) * i;
}

console.log("Checksum 2:", checkSum2);
