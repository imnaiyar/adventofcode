import { readFile } from 'node:fs/promises';

const input = await readFile(new URL('input.txt', import.meta.url), 'utf-8');

let leftNums: number[] = [];
let rightNums: number[] = [];

input.split('\n').forEach((line) => {
  const [left, right] = line.trim().split(/\s+/);
  leftNums.push(Number(left));
  rightNums.push(Number(right));
});

leftNums.sort((a, b) => a - b);
rightNums.sort((a, b) => a - b);
console.log(leftNums);

// Part 1
let distanceSum = 0;
leftNums.forEach((left, i) => {
    distanceSum += Math.abs(left - rightNums[i]);
})
console.log(distanceSum);


// Part 2
let similarityScore = 0;
leftNums.forEach((left) => {
    similarityScore += left * rightNums.filter((right) => right === left).length;
})

console.log(similarityScore);