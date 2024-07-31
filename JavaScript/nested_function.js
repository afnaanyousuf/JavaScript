// nested function is important in js

// entire react works with react.js

// you can nest a function within another function

// the nested(inner) function is private to its containing (outer) function

function addSquares(a,b){
       const sa = square(a);
       const sb = square(b);

        function square(num){
            return num*num;
        }

        return sa + sb;
    // you should create a function before return function this is called nested function
}

console.log(addSquares(3, 4));