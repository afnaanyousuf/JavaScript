// by adding an event listener to an object we catch a wide range of events triggered by the user or the browser.

// you cannot create a function like event handler because you need to capture the element where you create an event

// event listeners

const box1 = document.getElementById('box-1');
box1.addEventListener('click', () =>{
    console.log('click by event');
})

box1.addEventListener('click', () =>{
    console.log('click by event2');
})

// event object like (e) or event

box1.addEventListener('click', (e) =>{
    console.log('event object:', e);
})

box1.addEventListener('click', () =>{
    console.log('clicked on Box');
})

const container = document.getElementById('container');
container.addEventListener('click', () =>{
    console.log('clicked in container');
})

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keydown', (e) => {
    console.log('key', e.key);
})

nameInput.addEventListener('focus', (e) => {
    console.log('key', e);
})