var number = prompt("Plese enter a number");

if(number == 1){
    console.log(`${number} is neither a prime nor composite number`);
}
else if(number < 1){
    console.log(`${number} is not a prime number`);
}
else{
    // number 15
    for(var i = 2; i<number; i++){
        // 15%2 = R:1
        // 15/2 = Q:7
            if(number%i == 0){
               var res =`${number} is not a prime number`;
               break;
            }
            else{
               var res =`${number} is a prime number`;
            }
    }
    console.log(res);
}