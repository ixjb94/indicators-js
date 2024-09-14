const fs = require('fs');
const path = require('path');

const dirPath = './core';

const files = fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.js'))
    .map(file => path.basename(file, '.js'));

let output = '';
files.forEach(file => {
    output += `const ${file} = require("${dirPath}/${file}");\n`;
});

output += '\nmodule.exports = {\n';
files.forEach(file => {
    output += `    ${file},\n`;
});
output += '};\n';

fs.writeFileSync('index_.js', output);