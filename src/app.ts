import fs from 'fs';

let pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

console.log(pkg.description);
