// filter 
// find

const empArr = [
    {name:"King", age: 42},
    {name: "ali", age: 32},
    {name: "ahmad", age: 22},
    {name: "zain" , age:62},
    {name: "ayesha", age: 52},
    {name: "hafsa", age:28},
    {name: "sadi", age:27},
    {name: "rohma", age:26},
    {name: "masooma", age:25},
];
// Filter Method
// const filteredItem = empArr.filter((item)=>{
//     return item.age>30
// })
// console.log(filteredItem);

// Find Method
const findItem = empArr.find((item)=>{
    return item.age>30
})
console.log(findItem); 
