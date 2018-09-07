var promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        reject(Error('REJECTED!'))
    }, 300);
});

function onReject(error) {
    console.log(error.message);
};

promise.then(undefined, onReject);