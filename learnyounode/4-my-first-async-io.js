var fs = require('fs');

var filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log(data.split('\n').length - 1);
});