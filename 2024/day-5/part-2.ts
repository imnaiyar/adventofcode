import { readFile } from "node:fs/promises";

const input = await readFile(new URL('input.txt', import.meta.url), 'utf-8');

const [r, p] = input.split('\n\n');

const rules = r.split('\n').map((line) => line.split("|").map(Number))

const pages = p.split('\n').map((line) => line.split(",").map(Number))

let sum = 0;
for (const page of pages) {
    let isInvalid = false;
    for (const [a, b] of rules) {
        if (!page.includes(a) || !page.includes(b)) continue;
        if (page.indexOf(a) > page.indexOf(b)) {
             isInvalid = true;
             break; 
        }
    }
    if (isInvalid) {
        sum += [...page].sort((x, y) => {
            const rule = rules.find((r) => r.includes(x) && r.includes(y))
            if (!rule) return 0
            const [a, b] = rule; 
            if (x === a && y === b) return -1;
            if (x === b && y === a) return 1;
            return 0;
        })[Math.floor(page.length / 2)]
    }
}
console.log(sum)