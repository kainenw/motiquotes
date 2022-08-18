import { generate } from "./generate.js"

// DOM elements
const text = document.querySelector('h1');
const body = document.querySelector(':root');
const button = document.querySelector('h2')


// select background and text
const changeDisplay = async () => {
    const num = Math.floor(Math.random() * 17);
    const sentence = await generate();
    body.style.backgroundImage = `url("./Resources/Img/B${num}.jpg")`;
    text.innerHTML = sentence;
}

changeDisplay();

button.addEventListener('click', changeDisplay)