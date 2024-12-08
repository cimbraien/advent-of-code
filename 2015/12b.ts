import input from "./12input.json";

function solution(input: any[]): number {
  let sum = 0;
  function extract(e: any[] | Record<string, string | number>) {
    const children = Array.isArray(e) ? e : Object.values(e);
    if (!Array.isArray(e) && children.includes("red")) return;
    for (const child of children) {
      if (typeof child == "number") sum += child;
      if (typeof child == "object" || Array.isArray(child)) extract(child);
    }
  }
  extract(input);
  return sum;
}

console.log(solution(input));
