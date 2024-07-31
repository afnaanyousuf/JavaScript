let x = 153;
let sum = 0;
let temp = x;

while(temp > 0){
    y = temp % 10; // 3
    sum+= y*y*y;
    temp = parseInt(temp/10); //150
}

//console.log(x, sum);

if(x === sum){
    console.log("Armstrong no");
}
else{
    console.log("Not a Armstrong no");
}