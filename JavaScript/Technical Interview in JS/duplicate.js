// how to find duplicate elements in a given array

const arrNumber = [1,2,8,2,9,8];
// filter returns element,index,array
const duplicates = arrNumber.filter((element,index,arr)=>arr.indexOf(element)!==index)
console.log(duplicates);