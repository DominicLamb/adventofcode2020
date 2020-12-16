import fs from 'fs';

const contents = fs.readFileSync('./input/4.txt').toString().split("\n\n");
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
let validPassports = 0;

const hasRequiredFields = (map) => requiredFields.every((field) => {
    console.log(field);
    return map.has(field)
});

contents.forEach((data) => {
    const map = new Map();
    const fields = data.replace(/[\r\n]+/g, ' ').split(/\s+/);
    fields.forEach((field) => {
        const [ key, value ] = field.split(':');
        map.set(key, value);
    });

    if (hasRequiredFields(map)) {
        ++validPassports;
    }
})

console.log(validPassports);