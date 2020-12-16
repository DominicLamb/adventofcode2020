import fs from 'fs';

const contents = fs.readFileSync('./input/5.txt').toString().split("\n");
let highestId = 0;
const knownIds = new Set();

contents.forEach((input) => {
    let searchMinX = 0;
    let searchMaxX = 127;
    let searchMinY = 0;
    let searchMaxY = 7;
    input.split('').forEach((char) => {
        switch (char) {
            case 'F':
                searchMaxX -= Math.ceil((searchMaxX - searchMinX) / 2);
            break;
            case 'B':
                searchMinX += Math.ceil((searchMaxX - searchMinX) / 2);
            break;
            case 'L':
                searchMaxY -= Math.ceil((searchMaxY - searchMinY) / 2);
            break;
            case 'R':
                searchMinY += Math.ceil((searchMaxY - searchMinY) / 2);
            break;
        }
    });

    knownIds.add(searchMinX * 8 + searchMaxY);
    highestId = Math.max(highestId, searchMinX * 8 + searchMaxY);
});

const sortedIds = Array.from(knownIds.values()).sort((a, b) => a > b ? 1 : -1);
const unknownIds = [];
for (let i = 0; i < sortedIds.length; ++i) {
    if (sortedIds[i + 1] !== sortedIds[i] + 1) {
        unknownIds.push(sortedIds[i] + 1);
    }
}

for (let i = 0; i < unknownIds.length; ++i) {
    if (knownIds.has(unknownIds[i] + 1) && knownIds.has(unknownIds[i] - 1)) {
        console.log('Found', unknownIds[i]);
    }
}
console.log(unknownIds);