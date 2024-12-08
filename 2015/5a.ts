import input from "./5input.json";

function solution(input: string[]): number {
  return input.filter((word) => isNice(word)).length;
}

function isNice(word: string): boolean {
  const vowelCount = word.match(/[aeiou]/g)?.length || 0;
  return (
    vowelCount >= 3 && !new RegExp(/ab|cd|pq|xy/).test(word) && new RegExp(/([a-z])\1/).test(word)
  );
}

console.log(solution(input));
