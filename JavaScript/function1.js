let i= -1;
let previousNumber = 0;

while(true){
    let gettingNumber = prompt("Enter the Number");

    if(i<gettingNumber){
        previousNumber = gettingNumber;
        i = gettingNumber;
    }
    else{
        break;
    }
}