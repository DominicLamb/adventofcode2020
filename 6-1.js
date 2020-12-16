import fs from 'fs';

const contents = fs.readFileSync('./input/6.txt').toString().split("\n\n");

let count = 0;

contents.forEach((group) => {
    const answers = new Set();
    group.split("\n").forEach((string) => {
        string.split('').forEach(char => answers.add(char));
    })

    count += answers.size;
});

console.log(count);
