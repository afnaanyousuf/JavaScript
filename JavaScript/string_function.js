const name = "hitesh";
const repoCount = 50; // git repository count

console.log(name + repoCount + "Value"); // outdated syntax

// back text - string interpolation
// mainly used in back-end 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// how to declare string in another way

const gameName = new String("hitesh-hc");

// console.log(gameName[0]);
// console.log(gameName.__proto__); //object


// console.log(gameName.length); // string method
// console.log(gameName.toUpperCase()); // string method
console.log(gameName.charAt(2)); // character search
console.log(gameName.indexOf('t')); //index of each letter

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

// trim() removes extra space
// trimstart() and trimend()
const newStringOne = "     hitesh    ";
console.log(newStringOne.trim());  

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));