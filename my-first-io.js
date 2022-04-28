const fs = require('fs') 
const filename = process.argv[2];

buffer = fs.readFileSync(filename);
contents = buffer.toString();
console.log(contents.split('\n').length - 1); 
// split this stirng evertime in runs into a space with \n and puts it into a array

