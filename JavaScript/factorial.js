// var primeNum = prompt("Enter a Number");

// if(primeNum%1){
//     document.write("It is a Prime Number");
// }
// else{
//     document.write("It is not a Prime Number");
// }

// factorial Number

var e = prompt("Enter a Number:");
function factorial(e){

    if(e==1 || e==0){
        return 1;
    }
    else 
      return (e * factorial(e-1));
}
var a = factorial(e);
document.write(a);