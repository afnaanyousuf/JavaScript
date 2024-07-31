const username = "Lee";
const tweets = 50;
console.log(username);

// interacting with webpages
/* we can access HTML elements of our webpage using the doCUment keyword.
document represents our webpage
Now to interact with an HTML element, we need the document.getElementById() instruction
*/

document.getElementById("secret");

// interacting webpages often use buttons to react to click from visitors
/* However, without more information a button tag is useless.
To react to clicks from visitors, a button tag needs the onclick attribute */

/* we can use the show function to change the content of an element, like its text, when we click an button

*/
function show(){
    // .innerHTML attribute retrieves the text of an HTML element
    document.getElementById("secret").innerHTML = "NOT telling you";
}

function magic(){
    document.getElementById('rental').innerHTML="Ron's Bike Rental";
}

// collection are similiar to arrays. They work with index that start with 0. 

// Display the first elemet's HTML content.

function displayItem(){
    const el = document.getElementsByTagName("li");
    const p = document.querySelector(".zero");
    p.innerText = el[0].innerHTML;
}

// just like arrays we can also access the length property of the collection
function displayLength(){
    const el = document.getElementsByTagName("li");
    const p = document.querySelector(".first");
    p.innerText = el.length;
}

/* if we want to return a collection that contains specific elements of a class, we can use 
/ getElementByClassName() method instead */
function displayThing(){
    const el = document.getElementsByClassName("urgent");
    const p = document.querySelector("p");
    p.innerText = "You have " + el.length + "urgent tasks";
}

// to access multiple elements that have more than one class, we just add the classes with space in between
function displayPage(){
    // const el = document.getElementsByClassName("urgent important");
    const el = document.getElementsByTagName("ul");
    const p = document.querySelector(".page");
    p.innerText = el.length;
}

// DISPLAYING USER INPUT
// function register(){
//     const paragraph = document.querySelector(".message");
    // need to add .value to access user input from an included script
//     const username = document.getElementById("usernameInput").value  = "";
//     paragraph.innerHTML = username + ", youre signed up!";
// }

// img attribute
// function showAttribute(){
//     const el = document.querySelector("img");
//     const paragraph = document.querySelector(".pp");
//     paragraph.innerText = el.src;
// }

// button click change input range type to checkbox type
// function changeQuestionType(){
//     const el = document.querySelector("#name");
//     el.type = "checkbox";
//     el.type = "email";
// }

// by adding the link to the stylesheet, we change this webpage's entire look
// it will change in head section link tag
// function addStyleSheet(){
//     const el = document.querySelector("link");
//     el.href="style.css";
// }

// update src attribute in img
//  use camel case for borderRadius for properties having multiple words 
// function changeAttribute(){
//     const el = document.querySelector(".mimo");
//     el.src = "./images/B.png";
//     el.style.borderRadius = "45px"; 
//     el.style.width = "300px";
//     el.style.height = "200px";
// }

// to access an element's styling we add the style attribute. and the exact style like .color
// use camel case for backgroundColor for properties having multiple words
// function showColor(){
//     const el = document.querySelector(".color");
//     const container = document.querySelector(".jerry");
//     container.innerText = el.style.color;
//     el.style.color = "red";
//     el.style.backgroundColor = "blue";
//     el.style.borderRadius = "55px";
//     el.style.backgroundColor = "aliceBlue";
// }

// display element using css like inline-block, block, flex ,
// function changeLayout(){
//     const el = document.querySelector("a");
//     el.style.display = "block";
// }

// imagelink - getAttribute()
// function displayAttribute(){
//     const img = document.querySelector("img");
//     const imagelink = img.getAttribute('src');
//     const p = document.querySelector("p");
//     p.innerText = imagelink;
// }

// change the type of the input element to range
// function changeType(){
//     const el = document.querySelector(".dty");
//     el.setAttribute("type", "range");
// }

// updating the elements using setAttribute()
// function updateElement(){
//     const el = document.querySelector('#iddy');
//     el.setAttribute("placeholder", "1234");
// }

// IMPORTANT NOTE
// difference between using classlist and setAttribute to modify an element's classes
/* setAttribute() overwrites the element's classes with classlist*/


// toggling the element MEANING IS 
// if the element already has the class it's removed, otherwise it's added
function toggleBold(){
    const el = document.querySelector("p.hurry");
    el.classList.toggle("bold");
}
// setAttribute
function turnBold(){
    const el = document.querySelector("p");
    el.setAttribute("class", "bold");
    el.style.fontSize = "40px";
    el.style.fontWeight = "700";
}

function turnItalic(){
    const el = document.querySelector("p");
    el.setAttribute("class", "italic");
}
// remove the classes
function removeBold(){
    const el  = document.querySelector("p");
    el.classList.remove("bold");
}

// add multiple classes to an element at the same time
// add two new classes to our paragraph element.
// classList method to add a class "classList.add()"
function addClasses(){
    const el  = document.querySelector("p.black");
    el.classList.add("highlight", "underline",);
}
// classList method to remove a class "classList.remove()"
// remove multiple classes  in the paragraph
function removeClasses(){
    const el = document.querySelector("p.black");
    el.classList.remove("underline");
}

// input field and its value
function sendPost(){
    const text = document.querySelector("p.pure");
    const post = document.getElementById("sendText").value;
    text.innerHTML = post;
}

