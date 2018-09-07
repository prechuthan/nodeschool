'use strict';

var promise = new Promise((fufill, reject) => {
    setTimeout(() => fufill('FULFILLED!'), 300);
});

promise.then(console.log);