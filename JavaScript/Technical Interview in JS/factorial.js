// factorial (n!) of a given number 

// The factorial of a number is the product of all number from 1 to that number

// 5! = 1*2*3*4*5 = 120

// Factorial of negative number is not possible

// Factorial of a Number without built-in function

// let num = 7;
// let fac = 1;
// //num!= num *(num-1)*(num*2)...  1;
// debugger;
// for(num; num>=1 ; num--){
//     fac = fac * num;
//     console.log(fac);
// }


// Factorial of a Number with built-in function

const inputNum = prompt("Enter a Number:");

let fact = 1;

if(inputNum<0){
    console.log(`Factorial of ${inputNum} is not possible`);
}

else{
    for(let i=1; i<=inputNum; i++){
        fact = fact *i;
    }
    console.log(`Factorial of ${inputNum} is ${fact}`);
}