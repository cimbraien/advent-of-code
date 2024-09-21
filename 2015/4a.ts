const input = "iwrupvqb";

function solution(input: string): number {
  let i = 0;
  while (true) {
    const hash = new Bun.CryptoHasher("md5").update(input + i.toString()).digest("hex");
    if (hash.startsWith("00000")) return i;
    i++;
  }
}

console.log(solution(input));
