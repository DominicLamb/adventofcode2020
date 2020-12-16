import fs from 'fs';

const contents = fs.readFileSync('./input/2.txt').toString().split(/[\r\n]+/);

let totalValid = 0;

for(const line of contents) {
    const [ _, min, max, char, string ] = line.match(/^(\d+)-(\d+) (.): (.+)$/);
    const charOccurrences =  string.length - string.replace(new RegExp(char, 'g'), '').length;

    console.log(charOccurrences, char, string, string.replace(char, ''));
    if (charOccurrences >= min && charOccurrences <= max) {
        ++totalValid;
    }
}

console.log(totalValid);