// const arrNum = [1,2,3,4,5,9,10,7,8];
// const missArray = [];

// const missingValue =(arr)=>{
//     const minValue = Math.min(...arr)
//     const maxValue = Math.max(...arr)

//     for(let i=minValue;i<maxValue;i++){
//         if(arr.indexOf(i)<0){
//             missArray.push(i)
//         }
//     }
//     return(missArray);
// }

// console.log(missingValue(arrNum))


const arrNum = [1,2,3,7,8,9]
const missArray=[]

const missingValue=(arrNum)=>{
    const minValue = Math.min(...arrNum)
    const maxValue = Math.max(...arrNum)

for(let i=minValue;i<maxValue;i++){
        if(arrNum.indexOf(i)<0){
            missArray.push(i);
        }
}
  return(missArray);
}

console.log(missingValue(arrNum));