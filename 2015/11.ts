const input = "cqjxjnds";

function getNext(password: string): string {
  for (let i = 7; i >= 0; i--) {
    const char = password.charAt(i);
    if (char == "z") {
      password = password.slice(0, i) + "a" + password.slice(i + 1, 8);
      continue;
    }
    if (char == "h") return password.slice(0, i) + "j" + password.slice(i + 1, 8);
    if (char == "n") return password.slice(0, i) + "p" + password.slice(i + 1, 8);
    if (char == "k") return password.slice(0, i) + "m" + password.slice(i + 1, 8);
    return (
      password.slice(0, i) + String.fromCharCode(char.charCodeAt(0) + 1) + password.slice(i + 1, 8)
    );
  }
  return "";
}

function isValid(password: string): boolean {
  const re = new RegExp(
    /(abc)|(bcd)|(cde)|(def)|(efg)|(fgh)|(ghi)|(hij)|(ijk)|(jkl)|(klm)|(lmn)|(mno)|(nop)|(opq)|(pqr)|(qrs)|(rst)|(stu)|(tuv)|(uvw)|(vwx)|(wxy)|(xyz)/,
  );
  if (!re.test(password)) return false;
  let count = 0;
  for (let i = 0; i < 8; i++) {
    if (password.charAt(i) == password.charAt(i + 1)) {
      count++;
      i++;
    }
  }
  return count >= 2;
}

function solution(input: string) {
  while (true) {
    input = getNext(input);
    if (isValid(input)) return input;
  }
}
const solA = solution(input);
const solB = solution(solA);

console.log(`A: ${solA}`);
console.log(`B: ${solB}`);
