const input = "1113222113";

function lookAndSay(num: string) {
  num += "x";
  let count = 1;
  let curr = num.charAt(0);
  let out = "";
  for (let i = 1; i < num.length; i++) {
    const char = num.charAt(i);
    if (curr == char) {
      count++;
      continue;
    }
    out += `${count}${curr}`;
    curr = char;
    count = 1;
  }
  return out;
}

function solution(input: string, n: number): number {
  for (let i = 0; i < n; i++) {
    input = lookAndSay(input);
  }
  return input.length;
}

console.log(`A: ${solution(input, 40)}`);
console.log(`A: ${solution(input, 50)}`);
