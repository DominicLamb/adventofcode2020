import fs from 'fs';

const contents = fs.readFileSync('./input/3.txt').toString().split(/[\r\n]+/);

const slopes = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1]
]

const totals = [];

for(const slope of slopes) {
    console.log(slope);
    let totalTrees = 0;
    let position = 0;
    for(let i = 0; i < contents.length; i += slope[0]) {
        const line = contents[i];
        console.log(line);
        if (line[position % line.length] === '#') {
            ++totalTrees;
        }
        position += slope[1];
    }
    totals.push(totalTrees);
}

console.log(totals.reduce((prev, current) => prev * current));
console.log(totals);