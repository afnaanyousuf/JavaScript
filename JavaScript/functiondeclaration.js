const a = 10;
const b = 4;
const aPlus8 = a+b;
// console.log("result", aPlus8);
sum(a,b);
// do something else

const c = 10;
const d = 4;
const cPlus8 = a+b;
// console.log("result", cPlus8);
sum(c,d);
// do something else

const e = 10;
const f = 4;
const ePlus8 = a+b;
sum(e,f);
// console.log("result", ePlus8);

// function sum(a,b){
//     const sum = a+b;
//     console.log("result", sum);
// }

// hoisting is performed because function will be created anywhere.In the time of use,in a memory it can be search anywhere.


// return 

function sum(a,b){
    const sum = a+b;
    console.log("result", sum);
    return sum;
}
const p = 10;
const q = 4;
const result = sum(p,q);
console.log("The returned result is", result)


// types of function

// function name declaration
// function return
// function expression

// Function expression does not do hoisting 

//anonymous functions is no need to declare the function name in a varaiable.

// callback function 

// dom manipulation onclick event we will pass the function without declare a function name.

const square = function (num){
    return num * num;
}
console.log(square);

//square of any number like 3
console.log(square(3));
console.log(square(25));