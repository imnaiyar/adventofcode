import { readFile } from "node:fs/promises";
const input = await readFile(new URL('input.txt', import.meta.url), 'utf-8');
const grid = input.split("\n").map(e => e.split(""))

const cols = grid[0].length;
let count = 0
for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < cols; c++) {
    if (grid[r][c] !== 'A') continue;
    const diagDownRight = [grid[r - 1]?.[c - 1], grid[r + 1]?.[c + 1]].join('A')
    const diagDownLeft = [grid[r - 1]?.[c + 1], grid[r + 1]?.[c - 1]].join('A')
    if ((diagDownRight === 'MAS' || diagDownRight === 'SAM') && (diagDownLeft === 'MAS' || diagDownLeft === 'SAM')) count++
  }
}
console.log(count)