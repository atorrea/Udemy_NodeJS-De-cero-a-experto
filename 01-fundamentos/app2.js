// app2.js

// Replace all ocurrences of 'React' with 'Angular' in the README.md file and save the result in a new file called README-Angular.md

const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');

const newData = data.replace(/React/g, 'Angular');

fs.writeFileSync('README-Angular.md', newData);