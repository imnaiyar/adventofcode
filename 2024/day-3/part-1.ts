import { readFile } from "node:fs/promises";

const input = await readFile(new URL('input.txt', import.meta.url), 'utf-8');
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
let match;
let sum = 0
while ((match = regex.exec(input)) !== null) {
  sum += +match[1] * +match[2]
}

console.log(sum);