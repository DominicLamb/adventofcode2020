import fs from 'fs';

const EXPECTED_TOTAL = 2020;
const contents = fs.readFileSync('./input/1.txt').toString().split(/[\r\n]+/);
let result = [];

for (let i = 0; i < contents.length; ++i) {
    for (let j = 0; j < contents.length; ++j) {
        if (i === j) {
            continue;
        }

        if (Number(contents[i]) + Number(contents[j]) === EXPECTED_TOTAL) {
            result = [contents[i], contents[j]];
            break;
        }
    }

    if (result.length > 0) {
        break;
    }
}

console.log(Number(result[0]) * Number(result[1]));