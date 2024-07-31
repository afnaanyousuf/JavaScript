// const num = [1,2,3,4,5,6,7,8];
// for(let i=0;i<num.length;i++){
//     if(num[i]%1==0){
//         document.write("ODD Number:"+num[i]);
//     }
//     else if(num[i]%2==0){
//         document.write("Even Number:"+num[i]);
//     }
//     else{
//         document.write("It is not a numebr");
//     }
// }

// document.write(num);


const num = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
        document.write("ODD Number: " + num[i] + "<br>");
    } else if (num[i] % 2 === 0) {
        document.write("Even Number: " + num[i] + "<br>");
    } else {
        document.write("It is not a number" + "<br>");
    }
}

const numbers =  [1,2,3,8,9,12,16];
const even = numbers.filter((item) => {
     return item%2===0
})
document.write("Even Number"+even+'<br>');

const number=[1,3,6,9,7,15,20,2]

const odd=number.filter((text)=>{
     return text%2 !==0
})

document.write("Odd Number",odd);