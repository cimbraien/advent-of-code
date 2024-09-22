const input = [
  "Faerun to Tristram = 65",
  "Faerun to Tambi = 129",
  "Faerun to Norrath = 144",
  "Faerun to Snowdin = 71",
  "Faerun to Straylight = 137",
  "Faerun to AlphaCentauri = 3",
  "Faerun to Arbre = 149",
  "Tristram to Tambi = 63",
  "Tristram to Norrath = 4",
  "Tristram to Snowdin = 105",
  "Tristram to Straylight = 125",
  "Tristram to AlphaCentauri = 55",
  "Tristram to Arbre = 14",
  "Tambi to Norrath = 68",
  "Tambi to Snowdin = 52",
  "Tambi to Straylight = 65",
  "Tambi to AlphaCentauri = 22",
  "Tambi to Arbre = 143",
  "Norrath to Snowdin = 8",
  "Norrath to Straylight = 23",
  "Norrath to AlphaCentauri = 136",
  "Norrath to Arbre = 115",
  "Snowdin to Straylight = 101",
  "Snowdin to AlphaCentauri = 84",
  "Snowdin to Arbre = 96",
  "Straylight to AlphaCentauri = 107",
  "Straylight to Arbre = 14",
  "AlphaCentauri to Arbre = 46",
];

function solution(input: string[]) {
  const map: Record<string, Record<string, number>> = {};

  for (const line of input) {
    const [src, _a, dest, _b, dist] = line.split(" ");
    if (!map[src]) map[src] = {};
    map[src][dest] = parseInt(dist);
    if (!map[dest]) map[dest] = {};
    map[dest][src] = parseInt(dist);
  }
  const totalCities = Object.keys(map).length;
  let minLength = Infinity;
  function dfs(current: string, visitted: string[], total: number) {
    if (visitted.length == totalCities) {
      if (minLength > total) minLength = total;
      return;
    }
    for (const next of Object.keys(map[current])) {
      if (visitted.includes(next)) continue;
      const newVisitted = [...visitted];
      newVisitted.push(next);
      dfs(next, newVisitted, total + map[current][next]);
    }
  }
  for (const city of Object.keys(map)) {
    dfs(city, [city], 0);
  }
  return minLength;
}

console.log(solution(input));
