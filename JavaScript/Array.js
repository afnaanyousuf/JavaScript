// let a = ["Afnaan","Saghun","Sabeer","Muzammail"];

// for(let i=0; i<a.length ; i++){
//     console.log(a[i]);
// }

let a = "HeLLo World";

for(i=0 ; i<a.length ; i++){
    // console.log(a[i]);

    // console.log(a[4]);

    // console.log(a[7]);

    // console.log();

    if(a[i] == "o"){
        console.log(i);
    }
}


let age = [12,23,45,17,15,87];

for(j=0; j<age.length; j++){
    if(age[j] <= 18){
        console.log("You are eligible");
    }
    else{
        console.log("You are not eligible");
    }
}

var num = prompt("Your no is:");
var originalName = num;
var reverse = 0;

while(num != 0){
    reverse = (reverse*10)+(num%10);
    num = parseInt(num/10);
}

if(originalNmae == reverse){
    document.write(reverse+"Palindrome number");
}
else {
    document.write(reverse+"Not a Palindrome number");
}