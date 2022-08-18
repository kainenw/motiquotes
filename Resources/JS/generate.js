import { verb, noun, other } from "./words.js"

const random = (arr) => {
    let range = arr.length;
    let i = Math.floor(Math.random() * range)
    if(range === 1){
        return arr[0];
    } else {
        return arr[i];
    }
}

const posN = noun.sg.pos;
const negN = noun.sg.neg;
const impP = verb.impSg.pos;
const impN = verb.impSg.neg;
const indP = verb.ind.pos;
const indN = verb.ind.neg;
const mod = verb.modal;

export const generate = () => {
    let pick = Math.floor(Math.random() * 3);
    let sentence;
    if(pick === 0){
        const v = random(impP);
        const obj = random(posN);
        sentence = `${v} your ${obj}!`;
    } else if(pick === 1) {
        const v = random(impP);
        const h = random(mod)
        sentence = `you ${h} ${v} it!`;
    } else if(pick === 2) {
        const v = random(impN);
        const obj = random(negN);
        sentence = `${v} your ${obj}!`;
    } /*else if(pick === 3){
        const v = random(indP);
        const s = random(posN);
        const obj = random(posN);
        sentence = `${s} is ${v} for ${obj}`;
    } else if (pick === 4) {
        let s = random(posN);
        let v = random(indN);
        let dO = "the "+ random(negN);
        let iO = random(other.preposition) +" the "+ random(posN);
        return s +" "+ v +" "+ dO +" "+ iO;
    }*/
    return sentence;
}