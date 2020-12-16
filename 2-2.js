import fs from 'fs';

const contents = fs.readFileSync('./input/2.txt').toString().split(/[\r\n]+/);

let totalValid = 0;

for(const line of contents) {
    const [ _, firstIndex, secondIndex, char, string ] = line.match(/^(\d+)-(\d+) (.): (.+)$/);
    const charOccurrences =  (string[firstIndex - 1] === char) + (string[secondIndex - 1] === char);

    if (charOccurrences === 1) {
        ++totalValid;
    }
}

console.log(totalValid);