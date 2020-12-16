import fs from 'fs';

const contents = fs.readFileSync('./input/3.txt').toString().split(/[\r\n]+/);

let totalTrees = 0;

const TOTAL_DOWN = 1;
const TOTAL_RIGHT = 3;

const position = [0, 0];

for(const line of contents) {
    if (line[position[1] % line.length] === '#') {
        ++totalTrees;
    }
    position[0] += TOTAL_DOWN;
    position[1] += TOTAL_RIGHT;
}

console.log(totalTrees);