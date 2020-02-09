let a;
const b = 4;

function c() { // anonymous function
    var a = 20;
    console.log('old method function declaration', a, b);

}

a = 10;

const fun = () => {  // es6 function js named function
    let a = 30;
    console.log('new method function declaration', a);

}


c();
fun();

function addition(a, b) {
    return a + b;
}

// ES6 function parameters
const add = (a, b) => a + b;


console.log(add(7, 3));
console.log(addition(4, 4));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterOdd = (arr => {})

arr1 = arr.filter(res => {
    return res % 2 !== 0;
});
console.log('Odd Numbers', arr1);

arr1 = arr.filter(res => {
    return res % 2 !== 0;
});

// Actual Callback method without arrow
// function addTwoNum(a, b, callBack) {
//     sum = a + b;
//     callBack(a , b)
//     console.log('sum', sum);
// }

// function multiply(a, b) {
//     mul = a * b;
//     console.log('multiply', mul);
// }
// addTwoNum(2, 3, multiply)


function multiply(a, b, callBack) {
    mul = a * b;
    callBack(a, b);
    console.log('multiply', mul);
}

multiply(2, 5, function (a, b) { // declared and called
    sum = a + b;
    console.log('sum', sum);
});

const setTimeoutCalBack = function() {
    console.log('Do you eat mutton!!!');
}

setTimeout(setTimeoutCalBack ,9000); // method which accepts two arguments 1 is callbck fn and the timer.

setTimeout(() => {
    console.log('timed out in es6');
}, 12000)


const filters = function(arr) {
    arr1 = arr % 2 !== 0; // odd number
    return arr1;
}
arr1 = arr.filter( function(arr) {
    arr1 = arr % 2 !== 0; // even number
    return arr1;
});

arr2 = arr.filter(res => res % 2 === 0);

console.log('filtered evens', arr2);

console.log('filtered odds', arr1);

let copy = multiply;
console.log(copy);
