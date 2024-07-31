
// functions wiith array and objects
// advanced topics scope - function scope, global scope, local scope.
// ... - rest and spread operator

// function calculateCartPrice(...num1){
//     return num1;
// }
console.log(calculateCartPrice(200, 400, 600));

function calculateCartPrice(val1, val2, ...num2){
    return num2;
}
console.log(calculateCartPrice(200, 400, 600, 800, 760, 643));

// object
const user = {
    username: "hitish",
    price: 199
}

function handleObject(anyobject){
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); one way to handle the object

handleObject({
    username: "sam",
    price:399
})

// array 

const myarray = [1200, 300, 200, 400];

function returnSecondValue(getArray){
   return getArray[3];
}
// console.log(returnSecondValue(myarray));
console.log(returnSecondValue([200, 400, 500, 600]));