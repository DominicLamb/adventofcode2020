import fs from 'fs';

const contents = fs.readFileSync('./input/6.txt').toString().split("\n\n");

let count = 0;

contents.forEach((group) => {
    const answers = new Map();
    const answersRaw = group.split("\n");
    const numParticipants = answersRaw.length;
    answersRaw.forEach((string) => {
        string.split('').forEach(char => answers.set(char, (answers.get(char) || 0) + 1));
    });

    count += Array.from(answers.values())
        .filter((value) => value === numParticipants)
        .length;
});

console.log(count);
