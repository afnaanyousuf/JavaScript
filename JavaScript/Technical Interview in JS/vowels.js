// type 1
// var string = prompt('enter string:');
// string=string.toLocaleLowerCase()
// if(string=='a'|| string=='e'|| string=='i'|| string=='o' || string=='u'){
//     document.write(string+": is vowel");
// }else{
//     document.write(string+": is not vowel");
// }

// type 2
var string = prompt('enter string:');
const vowels = ['a','e','i','o','u'];
const countVowel=(string)=>{
    var count= 0;
    
    for(let letter of string.toLowerCase()){
        if(vowels.includes(letter)){
            count++
        }
    }
    return count
}
console.log(countVowel(string));