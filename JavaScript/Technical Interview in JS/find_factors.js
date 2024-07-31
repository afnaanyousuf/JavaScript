// program to find the factors of an integer
// take input
// let num = prompt("Please enter a positive number");
// console.log(`factors of ${num}`);
// for(let i=0;i<=num;i++){
//     if(num%i==0){
//             console.log(i);
//     }
// }

let num1 = prompt("Enter the number:");
console.log(`factors of ${num1}`);

for(let i=0;i<num1;i++){
    if(num1%i==0){
        console.log(i);
    }
}