// template strings make it esay to add variables and expressions inside of strings

const fullName = "Helen MoGuire";
console.log("Hello "+fullName+"!");
console.log(`Hello ${fullName}`);

// it make it easy too combine strings with variables through string literals
// ``- backtick characters

// lets transform the string "Apple" into a strong literal by enclosing Apple in backtick character rather thn double quotes
const cake = `Apple`;
console.log(cake);

// to easily combine variables with string literals, we use the ${name} syntax where name is a variable

const category = `pie`;
const cakeMaker = `Apple ${category}`;
console.log(cakeMaker);


// when calling a function we leave out the parenthesis() if we're passing a string literal as an argument to the function
// pass the string literal Jane while calling the function

const greetings = (name) =>{
    return `Boring ${name}`;
}
console.log(greetings`jane`);
// output :- Boring jane
