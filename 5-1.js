import fs from 'fs';

const contents = fs.readFileSync('./input/5.txt').toString().split("\n");
let highestId = 0;

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

    highestId = Math.max(highestId, searchMinX * 8 + searchMaxY);
});

console.log(highestId);