let userArray = process.argv.slice(2);

let userObject = {};
[, userObject.username, userObject.email] = userArray

console.log(userObject);
