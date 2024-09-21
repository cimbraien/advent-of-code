import input from "./5input.json";

function solution(input: string[]): number {
  return input.filter((word) => isNice(word)).length;
}

function isNice(word: string): boolean {
  return new RegExp(/([a-z][a-z])[a-z]*\1/).test(word) && new RegExp(/([a-z])[a-z]\1/).test(word);
}

console.log(solution(input));
