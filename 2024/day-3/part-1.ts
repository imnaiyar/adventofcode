import { readFile } from "node:fs/promises";

const input = await readFile(new URL('input.txt', import.meta.url), 'utf-8');
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
const matches: Array<number[]> = [];
let match;
while ((match = regex.exec(input)) !== null) {
  matches.push([parseInt(match[1]), parseInt(match[2])])
}
let sum = 0;

for (let i = 0; i < matches.length; i++) {
  const group = matches[i];
  sum += group[0] * group[1]
}

console.log(sum);