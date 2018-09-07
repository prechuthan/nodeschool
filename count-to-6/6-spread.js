let args = process.argv.slice(2);

const minVal = Math.min(...args);

console.log(`The minimum of [${args}] is ${minVal}`);
