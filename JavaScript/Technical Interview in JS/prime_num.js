var number= prompt("Enter a number:");

if(number==1){
    console.log(`${number} is not prime number or composite number`);
}else if(number<1){
    console.log(`prime number of ${number} is not possible `);
}else{
    for(let i=2; i<number; i++){
        if(number%i==0){
            var result = `${number} is not a prime number`;
            break;
        }else{
            var result = `${number} is a Prime Number`;
        }
    }
    console.log(result)
}