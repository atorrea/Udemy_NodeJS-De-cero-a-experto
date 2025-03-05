// app3.js

const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

// 1. Obtener el número de palabras en el archivo README.md

console.log('Palabras: ', content.split(' ').length); // considera cualquier texto entre espacios como una palabra

// 2. Obtener el número de ocurrencias de la palabra 'React' en el archivo README.md

console.log('Ocurrencias de la palabra "React": ', content.split(' ').filter(word => word.toLowerCase() === 'react').length); // case insensitive, no considera cuando react forma parte de otra palabra

console.log('Ocurrencias de la palabra "React": ', content.split(' ').filter(word => word.toLowerCase().includes('react')).length); // considera cuando react forma parte de otra palabra

console.log('Ocurrencias de la palabra "React": ', content.match(/React/gi).length); // case insensitive, realizado mediante expresión regular

console.log('Ocurrencias de la palabra "React": ', content.match(/React/gi ?? []).length); // protegido contra null