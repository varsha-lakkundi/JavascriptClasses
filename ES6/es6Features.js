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

const setTimeoutCalBack = function () {
    console.log('Do you eat mutton!!!');
}

setTimeout(setTimeoutCalBack, 1000); // method which accepts two arguments 1 is callbck fn and the timer.

setTimeout(() => {
    console.log('timed out in es6');
}, 2000)


const filters = function (arr) {
    arr1 = arr % 2 !== 0; // odd number
    return arr1;
}
arr1 = arr.filter(function (arr) {
    arr1 = arr % 2 !== 0; // even number
    return arr1;
});

arr2 = arr.filter(res => res % 2 === 0);

console.log('filtered evens', arr2);

console.log('filtered odds', arr1);

let copy = multiply;
console.log(copy);

let emp = [{
    name: 'varsha', id: 2, isEmployee: true, age: 25
},
{
    name: 'baswaraj', id: 3, isEmployee: false, age: 28
},
{
    name: 'raj', id: 4, isEmployee: true, age: 30
},
{
    name: 'eshwar', id: 4, isEmployee: true, age: 18
},
{
    name: 'raju', id: 5, isEmployee: false, age: 35
},
{
    name: 'swaraj', id: 6, isEmployee: true, age: 40
}];

const id = 2;

let arrOfEmp = emp.filter(h => h.isEmployee == true && h.id == id );
console.log(arrOfEmp);

const isOfAge41 = emp.some((item, index, arr) => item.age > 41); // some returns boolean value based on condition given, it will stop executing once the condition is met and would not complete the loop
console.log(isOfAge41);

const isOfAge25 = emp.every((item, index, arr) => item.age >= 18); // 'every' method goes through every elements in an array unlike 'some' and checks whether every elements satisfy the condition
console.log(isOfAge25);

const employeeList = emp.map((item, index, arr) => {
    item.name += item.age;
    return item;
});
console.log(employeeList);

const pushEmp = emp.push({
    name: 'parvati', id: 8, isEmployee: false, age:45
});

console.log(pushEmp, 'emp Arr:', emp);

const popPimple = emp.pop();
console.log(popPimple, 'pop Emp:', emp);

const str = 'varsha lakkundi';
const str1 = str.split(' ').reverse().join(' ')
console.log(str1);

const sliceRtn = emp.slice(0, 3);
console.log('sliced Emp:', sliceRtn, 'emp org:', emp );

const copyEmp = JSON.parse(JSON.stringify(emp));
const spliceRtn = copyEmp.splice(0, 2);
console.log('spliced Emp:', spliceRtn, 'copied emp org:', copyEmp, 'emp org', emp );


const enteredData = emp.entries();
for(data of enteredData) {
console.log(data, 'emp entries');
}




