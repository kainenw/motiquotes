import { generate } from "./generate.js"

// DOM elements
const text = document.querySelector('h1');
const button = document.querySelector('h2')


// select background and text
const changeDisplay = async () => {
    text.innerHTML = generate();
}

changeDisplay();

button.addEventListener('click', changeDisplay)