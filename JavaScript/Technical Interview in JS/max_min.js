// Max Function 

// const arrNumber = [1,9,65,76];

// const maxFunction=(arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre>cur?pre:cur
//     }) 
// }
// console.log("Max Function:"+maxFunction(arrNumber));

// Min Function

// const arrNumber1 = [34,56,76,89,2];

// const minFunction=(arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre<cur?pre:cur
//     })
// }
// console.log("Min Function:"+minFunction(arrNumber1));


function maxFunction(){
    let array =[5,4,3,2,1];

    let max = array[0];
    
    for(let i=0; i<array.length; i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    console.log(`The largest element in array is ${max}`);
}
maxFunction();

