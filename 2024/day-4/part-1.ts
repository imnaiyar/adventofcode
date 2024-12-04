import { readFile } from "node:fs/promises";
const input = await readFile(new URL('input.txt', import.meta.url), 'utf-8');
const grid = input.split("\n").map(e => e.split(""))
const cols = grid[0].length
const directions = [
  [0, 1],   // right
  [0, -1],  // left
  [1, 0],   // down
  [-1, 0],  // up
  [1, 1],   // diagonal dow right
  [1, -1],  // diagonal down left
  [-1, 1],  // diagonal up right
  [-1, -1], // diagonal up left
];
let count = 0;
for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'XMAS'[0]) {
        for (const [dr, dc] of directions) {
          if (checkDir(r, c, dr, dc)) {
            count++;
          }
        }
      }
    }
  }
function checkDir(r: number, c: number, rowDir: number, colDir: number) {
  for (let i = 0; i < 'XMAS'.length; i++) {
        const nr = r + rowDir * i;
        const nc = c + colDir * i;
        if (nr < 0 || nr >= grid.length || nc < 0 || nc >= cols || grid[nr][nc] !== 'XMAS'[i]) return false;
      }
      return true;
}
console.log(count)