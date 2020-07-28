'use strict';

function sayHowdy(user) {
    return `Howdy ${user}!`;
}

function sayAdios(user) {
    return `Adios ${user}!`;
}

function createGreeting(user, greetingFunction) {
    return greetingFunction(user);
}

createGreeting('Kaitlyn', sayHowdy);
createGreeting('Ashley', sayAdios);

// const myButton = document.getElementById('main-btn');
// console.log(myButton);

let getMyButton = document.querySelector('#main-btn');
console.log(getMyButton);

const div = document.querySelector('#main-btn');
div.addEventListener('click', () => {
    console.log('You clicked me!');
})

// const button = document.getElementById('main-btn');
// const whatIsTheId = (e) => {
//     return `The element ID is ${e.target.id}!`;
// }
// button.addEventListener('click', whatIsTheId);
