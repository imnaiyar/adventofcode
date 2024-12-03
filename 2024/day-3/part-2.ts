import { readFile } from "node:fs/promises";

const input = await readFile(new URL('input.txt', import.meta.url), 'utf-8');

const regex = /do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\)/g;

let enabled = true;
let match;
let sum = 0;
while ((match = regex.exec(input)) !== null) {
  const instruction = match[0];
  if (instruction === 'do()') {
    enabled = true; 
  } else if (instruction === "don't()") {
    enabled = false;
  } else if (enabled && instruction.startsWith('mul')) sum += +match[1] * +match[2]
}

console.log(sum);