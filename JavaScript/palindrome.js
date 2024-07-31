// // let value = "madam";

// let value = "2A";

// const reverse = () =>{
//     let myreverse = value.toString().split("").reverse().join("");
//     let myStrVal = value.toString();
//     // console.log(typeof value); 

//     if(myStrVal == myreverse){
//         console.log("Palindrome");
//     }
//     else{
//         console.log("Not a Palindrome");
//     }
// };
// reverse();

// Palindrome using for loop
// function solution(){
// console.log("It is a palindrome or not");
//         let a = []; //stack
//         let b = "madam";
//         let c = " ";

//         for(let i=0; i<b.length; i++){
//             a.push(b[i]);
//         }

//         for(let i=0; i<b.length; i++){
//             c = c + a.pop();
//         }
//         if(b==c){
//             console.log("is a palindrome");
//         }
//         else{
//             console.log("is not a palindrome");
//         }
// }
// solution();

function solution(){
    console.log("It is a palindrome or not");
    //cat
    //madam
    //121
    let a = []; //empty array to store the stack
    let b = "madam";
    let c = "";

    for(let i=0; i < b.length; i++){
        a.push(b[i]);
        // console.log(i, "i");
        // console.log(b.length, "b.length");
    }
    for(let i=0; i< b.length; i++){
        c = c + a.pop(); 
    }

    if(b === c){
        console.log("Palindrome");
    }
    else{
        console.log("Not a Palindrome");
    }
}
solution();

sh = prompt("What is your name");

console.log(sh);