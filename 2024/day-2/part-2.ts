import { inputs as levels, isAscOrDescWithAdjDiff, isBetweenRange } from "./common.js";

let safe = 0;
for (let i = 0; i < levels.length; i++) {
  const level = levels[i].split(/\s+/).map(Number);
  if (isAscOrDescWithAdjDiff(level)) {
    safe++;
    continue;
  }
  for (let i = 0; i < level.length; i++) {
    const removedIndex = level.slice(0, i).concat(level.slice(i + 1));
    if (isAscOrDescWithAdjDiff(removedIndex)) {
      safe++
      break;
    }
  }
}

console.log(safe)