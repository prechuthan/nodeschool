var inputArgs = process.argv.splice(2);
var sum = 0;

inputArgs.forEach(value => {
    sum += Number(value);
});

console.log(sum);