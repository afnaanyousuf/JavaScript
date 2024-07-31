var string = prompt("Enter a value:");

string = string.toLocaleLowerCase();

const palindromeFind=(string)=>{
        // reverse string
        var reverseStr=string.split('').reverse().join('');
        if(reverseStr===string){
            return(`Palindeome of reverse string is ${string}`);
        }else{
            return false
        }
}
console.log(palindromeFind(string));


