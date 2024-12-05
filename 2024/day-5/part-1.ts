import { readFile } from "node:fs/promises";

const input = await readFile(new URL('input.txt', import.meta.url), 'utf-8');

const [r, p] = input.split('\n\n');

const rules = r.split('\n').map((line) => line.split("|").map(Number))

const pages = p.split('\n').map((line) => line.split(",").map(Number))
let sum = 0;

for (const page of pages) {
    let isValid = true
    for (const [a, b] of rules) {
        if (!page.includes(a) || !page.includes(b)) continue;
        if (page.indexOf(a) > page.indexOf(b)){
             isValid = false;
             break;
            }
    }
    if (isValid) sum += page[Math.floor(page.length / 2)]
}

console.log(sum);