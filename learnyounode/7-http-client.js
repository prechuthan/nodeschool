var http = require('http');

const inputURL = process.argv[2];

http.get(inputURL, (res) => {
    res.setEncoding('utf-8');
    res.on('data', (chunk) => {
        console.log(chunk);
    });
});