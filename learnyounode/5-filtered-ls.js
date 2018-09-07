var fs = require('fs');
var path = require('path');

var fileDir = process.argv[2];
var fileExt = '.' + process.argv[3];

fs.readdir(fileDir, (err, list) => {
    var fList = list.filter((file) => {
        return path.extname(file) === fileExt;
    });

    fList.forEach((file) => console.log(file));

});