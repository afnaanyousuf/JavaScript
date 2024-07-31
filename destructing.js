/* Destructing allows us to assign array items to variables to use like any other variable.

    USE SQUAARE BRACKET [] to store the variables corresponding to the array elements

It is the cleanest way to simplify our code

we can store new variables in [] and assign them to the original array cars */

const cars = ["Honda", "Volkswagen", "Bentley", "Cadillac", "Toyota", "Chevrolet", "Nissan", "Kia"];

const [firstCar, secondCar] = cars;
if(cars[0] === "Hyundai"){
    console.log('The prettiest car is a Hyundai');
}
else if(cars[1] === "Jeep"){
    console.log('The prettiest car is a Jeep');
}
else{
    console.log(`${firstCar} cars are prettier than ${secondCar}`);
}

// The first element inside the [] - array, companyName corresponds to the first element in the array, Leo Pizza.
// After destructing, we can use companyName like any other variable.

// const[companyName, phone, address] = ['Leo Pizza', '182u364364', '911 suiss bank, New York'];
// console.log(companyName);
// console.log(phone);
// console.log(address);

/* if we don't want to destructure every element in the array, we can save the rest in anyOtherVariable 
by using ... before anyOtherVariable */

const[companyName, ...anyOtherVariable] = ['Leo Pizza', '182u364364', '911 suiss bank, New York'];
console.log(companyName);
console.log(anyOtherVariable);

// output :-   
//             Loe Pizza 
//             ['182u364364', '911 suiss bank, New York']

/* The , inside the [] skips variables in the destructing array's first and second positions

we extract the array's third element in address

*/

const[, , address] = ['Leo Pizza' , '224454', 'chennai'];
console.log(address);
// output :- chennai


// const [id,userName,...extraInfo] = ['0011', 'Lina Jackson', 'Blue', 'Orange', 'Rugby'];

// console.log(id)
// console.log(userName)
// console.log(extraInfo)
// output
// 0011
// lina jackson
// ['Blue', 'Orange', 'Rugby']

// Note:- ... - an array with remaining elements

const [, userName, , ,favouriteSport] = ['0011', 'Lina', 'Jackson', 'Blue', 'Orange', 'Rugby'];
console.log(userName);
console.log(favouriteSport);

// Output
// Lina Jackson
// Rugby

// , skips the elements in a array. in this example skips the firstCar, third, and fourth ellement of the array

// const userInformation = {
//     firstName : "John",
//     lastName : "Smith",
//     age: 41
// };
// const {
//     firstName,
//     lastName,
//     age,
// }= userInformation;
// console.log(firstName, lastName, age);

// output :- John Smith 41

/* we can use the original name, a colon and a new name if we want to use varaiables names  
that differ from the object properties */

/* using curly braces-{} with the exact name of the object properties

and including a colon and the new name next to the variable name to change 
*/
const carInformation = {
    item1 : "Mazda",
    item2 : "cx30",
    item3 : "red",
}
const {
    item1: brand,
    item2: model,
    item3:color,
}=carInformation;
console.log(brand);
console.log(model);
console.log(color);
// output
// Mazda
// cx30
// red

const userInformation1 = {
    firstName : "John",
    lastName : "Smith",
    age: 41,
    phoneNumber : '9566709342'
};
const {
    firstName,
    lastName,
    ... otherInfo
}= userInformation1;
console.log(firstName);
console.log(lastName);
console.log(otherInfo);


const {
    name,
    ...rest
} = {
    name: 'leo',
    phone: '122344553',
    address: '911 sw street',
    website: 'www.loopizza.com'
}
console.log(name);
console.log(rest);
/* output :- 
       leo
        {
       phone: '122344553', address: '911 sw street', website: 'www.loopizza.com'
        }
       */
// best example of destructing the airplanes object
const airplanes = {
    brands: "Airbus",
    models: "A300",
    engineQty:2,
};
const {
    brands,
    models,
    engineQty,
} = airplanes;
console.log(brands, models, engineQty);

// output :- Airbus A300 2

// setting  a value in engineQty in case the element doesn't exist or is set to undefined
const [brand2, model2, engineQty2 = 1] = ['Airbus', 'A300'];
console.log(brand2);
console.log(model);
console.log(engineQty2);

// output:- 
/* Airbus
    A300
    1
*/

// const cars = ["Honda", "Volkswagen", "Bentley", "Cadillac", "Toyota", "Chevrolet", "Nissan", "Kia"];
// if(cars[0] === "Hyundai"){
//     console.log('The prettiest car is a Hyundai');
// }
// else if(cars[1] === "Jeep"){
//     console.log('The prettiest car is a Jeep');
// }
// else{
//     console.log(`${cars[0]} cars are prettier than ${cars[1]}`);
// }