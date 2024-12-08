export async function parseInputAsArray(filePath: string) {
  const file = Bun.file(filePath);
  const contents = await file.text();
  return contents.split("\n");
}

export async function parseInputAsArrays(filePath: string, separator: string) {
  const file = Bun.file(filePath);
  const contents = await file.text();
  const arrLength = contents.slice(0, contents.indexOf("\n")).split(separator).length;
  const arr: string[][] = new Array(arrLength).fill(null).map((e) => []);
  for (const line of contents.split("\n")) {
    line.split(separator).forEach((str, i) => arr[i].push(str));
  }
  return arr;
}

export async function parseInputAsString(filePath: string) {
  const file = Bun.file(filePath);
  return await file.text();
}

export async function parseInputAs2DArray(filePath: string, separator: string) {
  const file = Bun.file(filePath);
  const contents = await file.text();
  const arr = [];
  for (const line of contents.split("\n")) {
    arr.push(line.split(separator));
  }
  return arr;
}
