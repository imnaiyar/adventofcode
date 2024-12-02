import { readFile } from "node:fs/promises"
export const isBetweenRange = (diff: number) => Math.abs(diff) <= 3 && Math.abs(diff) >= 1;


export function isAscOrDescWithAdjDiff(arr: number[]) {
  let isAsc = true;
  let isDesc = true;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i]
    if (!isBetweenRange(diff)) {
      isAsc = false, isDesc = false;
      break;
    }
    if (diff >= 0) isDesc = false;
    if (diff <= 0) isAsc = false;
  }
  return isAsc || isDesc
};

export const inputs = (await readFile(new URL('input.txt', import.meta.url), 'utf-8')).split("\n");