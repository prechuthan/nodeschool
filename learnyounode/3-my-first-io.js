var fs = require('fs');

var filePath = process.argv[2];

var fileBuffer = fs.readFileSync(filePath);
var fileContents = fileBuffer.toString().split('\n');

console.log(fileContents.length - 1);
