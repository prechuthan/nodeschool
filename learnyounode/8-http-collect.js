var http = require('http');
const inputURL = process.argv[2];

http.get(inputURL, (res) => {
    var rawData = '';
    res.setEncoding('utf-8');

    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        console.log(rawData.length);
        console.log(rawData);
    });

});