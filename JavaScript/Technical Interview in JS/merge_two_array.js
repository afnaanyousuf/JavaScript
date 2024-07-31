var arr1 = ['1','8','9'];
var arr2 = ['45','7','19'];

// concatenate 
// var findArr=arr1.concat(arr2);
// var sortedArr= findArr.sort(function(arr1,arr2){
//     return arr1-arr2
// })
// console.log(sortedArr);

// Spread Operator

var result = [...arr1,...arr2 ];
var sortedArr2= result.sort(function(arr1,arr2){
       return arr1-arr2
    })
console.log(sortedArr2);