import { isAscOrDescWithAdjDiff, inputs as levels } from "./common.js" 
let safeLevels = 0;
for (let i = 0; i < levels.length; i++) {
  const level = levels[i].split(/\s+/).map(Number);
  if (isAscOrDescWithAdjDiff(level)) safeLevels++;
}

console.log(safeLevels)

