// Arrow Functions
// INTENTION OF ES6 - To fix the issues and improve js syntax
// it is a anonymous function, meaning that they don't have a function name
// if we want to call these functions, we need to store them inside a variable and call the variable with 
// with parentheses () at the end
// function getGreeting(){
//     return 'Hello';
// }
// const greeting = () => 'Hi';
// console.log(getGreeting());
// console.log(greeting());
// output 
// Hello 
// Hi

// function getGreeting(){
//     return 'Greetings!';
// }
// const greeting = () =>{
//     return "Hi";
// }
// console.log(getGreeting());
// console.log(greeting());
// output 
// Greetings!
// Hi

// like with normal functions, we can add parameter inside the parentheses and they use the parameter inside the function
function getGreeting(firstName){
    return 'Greetings! '+ firstName;
}
const greeting = (firstName) =>{
    return "Hi " + firstName;
}
console.log(getGreeting("Afnaan"));
console.log(greeting("Afnaan"));
// output 
// Greetings! Afnaan
// Hi Afnaan 

// const greetings = () =>{
//     return "Hello";
// };
// // by removing the curly braces {} and the return keyword
// const greetings = () => 'Hello';
// console.log(greetings())

// const getVehilesCount = () =>{
//     let count = 4003;
//     return count;
// };
// console.log(getVehilesCount());
// output
// 4003

const getVehilesCount = () => 400;
console.log(getVehilesCount());
// output
// 400

// Parameter value are set to undefined by default
// if a function call doesn't pass a value, the function will use undefined value.
// NaN - undefined value

// const getPrice = (total) =>{
//     const tax = 0.16;
//     return total + (tax * total);
// };
// console.log(getPrice());
// output : NaN

// To avoid undefined value, we specify the default value with parentheses 
// set the default parameter value inside the parentheses to total=200
const getPrice = (total = 200) =>{
    const discount = 0.16;
    return total - (discount * total);
};
console.log(getPrice());
// output
// 168

// Arrow function will be essential later on when we'll use them in more complex coe like react
const getDouble = number => number*2;
console.log(getDouble(4));
// output :- 8
const getSquare = (number, mutiplier) => number*mutiplier;
console.log(getSquare(4));
// output :- NaN - undefined value
const getRatio = (nom, denom) => {
    return nom/denom;
}
console.log(getRatio(20, 2));
// output :- 10

const getRatio1 = (nom, denom = 2) => {
    return nom/denom;
}
console.log(getRatio1(40));
// output :- 20

const getRatio2 = (nom, denom = 2) => {
    return nom/denom;
}
console.log(getRatio2(40, 4));
// output :- 10

const getPrice1 = discount => 100- discount;
console.log(getPrice1(10));
// output :- 90

const getArea = (length, width = 3) => length * width;
console.log(getArea(5));
// output :- 15

//  Blck scope means inside code block
for(let i=1; i<=3; i++){
    const age = i* 10;
    console.log("I am "+age+"years old");
}
/* Output
   I am 10 years old
   I am 20 years old
   I am 30 years old
// Global Scope
let countdown = 6;
for(let i=0; i<=5; i++){
    countdown--;
    console.log(countdown);
}
// OUTPUT
// 5
// 4
// 3
// 2
// 1
// 0

var winningNumber;

function drawWinningNumber(){
    const winningNumber = Math.floor((Math.random()*3));
    return winningNumber;
}

function drawWinner(){
    const players = ['Amanda', 'Sheila', 'Rob'];
    const winner = players[winningNumber];
    console.log("The winner is "+winner);
}
drawWinner();

// output:- The winner is undefined

const toDoList = ['sweeping', 'washing','mopping'];
function cleanUp(){
    for(let i=0;i<toDoList.length;i++){
        toDoList.pop(toDoList[i]);
    }
    console.log("I still have some "+ toDoList +" to do");
}
cleanUp();

// output:- I still have some sweeping to do

let retirement_age = 65;

function retire(age){
    retirement_age = 65;
    if(age>=retirement_age){
        console.log("Finally soome rest!");
    }
}
const finalRetirement = retire(70);

// output:- Finally soome rest!

const year = 1918;
function firstWorldWar(){
    const year = 1918;
    console.log("world war I ended in "+year);
}
function secondWorldWar(){
    const year = 1945;
    console.log("world war I ended in "+year);
}
firstWorldWar();
secondWorldWar();
