var p1 = Promise.resolve('R1');

var p2 = new Promise((resolve, reject) => {
    reject(Error('er'));
});

p2.catch(console.error)