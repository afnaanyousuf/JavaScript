// DOM Manipulation

// Finding the HTML Elements : 4 types of elements
// 1. id  2.tagname 3.classname 4.CSS Selectors

// document.getElementById("intro");
// document.getElementsByClassName("intro");
// document.getElementsByTagName("intro");
// document.querySelectorAll("intro");

// const myBody =document.body;

// console.log(myBody);

// const box2 = document.getElementById("box-2");

// console.log(box2);

// const divs = document.getElementsByTagName('div');

// console.log(divs);

// // const boxes = document.getElementsByClassName('box');

// const boxes = document.getElementsByClassName('random');

// console.log(boxes);

// const random = document.querySelector('.container .random');

// console.log(random);

// Modifying the HTML  Elements 

// changing HTML attributes using innerHTML:
// document.getElementById('box-1').innerHTML = new HTML

// changing HTML Attributes value:
// document.getElementById('myimage').src = 'landscape.jpg';
// document.getElementById('p2').style.color = 'blue';

//modifying class in HTML
// element.classList.add("mystyle");
// element.classList.remove("mystyle");
// element.classList.toggle("mystyle");

//const box1 = document.getElementById("box-1").innerHTML = "Hello world";

// const box2 = document.getElementById("box-2").innerHTML = "<h1>Hello world</h1>";

const box1 = document.getElementById("box-1");
// box1 background color is red
box1.style.backgroundColor = "red";

const box3 = document.getElementById("box-3");
box3.style.fontSize = '20px';


const boxes = document.getElementsByClassName('box');

for(i=0; i<boxes.length; i++){
    boxes[i].classList.add('round-border');
}

// box1.classList.remove('box');

box1.classList.remove('round-border');


// create and append HTML in JavaScript
// creating new element

const newParagraph = document.createElement('p');

newParagraph.innerText("lorem is the big big vih hjhjwqbqjhbshjbdhjdbwhjwqbd");

newParagraph.classList.add('box');

const container = document.getElementById('container');

container.appendChild(newParagraph);