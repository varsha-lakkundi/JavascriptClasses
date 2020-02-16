let es6Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 2, 3, 4]);
        reject('Something is wrong with my stomach!');
    }, 4000)
} );
es6Promise.then(res =>{
    console.log(res);
}).catch();

const callBackFn = (callBack) => {
    setTimeout(() => {
        callBack('Something went wrong', [1, 2, 3, 4]);
    }, 4000)
}

callBackFn((error, success) =>{
    if (error) {
        return console.log(error);
    }
    console.log(success);
});
