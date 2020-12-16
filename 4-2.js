import fs from 'fs';

const contents = fs.readFileSync('./input/4.txt').toString().split("\n\n");
const requiredFields = [
    {
        name: 'byr',
        valid: (value) => value >= 1920 && value <= 2002
    },
    {
        name: 'iyr',
        valid: (value) => value >= 2010 && value <= 2020
    },
    {
        name: 'eyr',
        valid: (value) => value >= 2020 && value <= 2030
    },
    {
        name: 'hgt',
        valid: (value) => value.includes('cm') ? parseInt(value) >= 150 && parseInt(value) <= 193 : parseInt(value) >= 59 && parseInt(value) <= 76
    },
    {
        name: 'hcl',
        valid: (value) => /^#[a-fA-F0-9]{6}$/.test(value)
    },
    {
        name: 'ecl',
        valid: (value) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)
    },
    {
        name: 'pid',
        valid: (value) => String(value).length === 9
    }
];
let validPassports = 0;

const hasRequiredFields = (map) => requiredFields.every((field) => {
    if (map.has(field.name)) {
        return field.valid(map.get(field.name));
    }
    return false;
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