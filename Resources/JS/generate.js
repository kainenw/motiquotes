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

const posN = noun.sg.pos
const imp = verb.impSg.pos
const ind = verb.ind.pos
const mod = verb.modal

export const generate = () => {
    let pick = Math.floor(Math.random() * 4);
    let sentence;
    if(pick === 0){
        const v = random(imp);
        const obj = random(posN);
        sentence = `${v} your ${obj}!`;
    } else if(pick === 1) {
        const v = random(imp);
        const h = random(mod)
        sentence = `you ${h} ${v} it!`;
    } else if(pick === 2){
        const v = random(ind);
        const s = random(posN);
        const obj = random(posN);
        sentence = `${s} is ${v} for ${obj}`;
    } else if (pick === 3) {
        let s = random(posN);
        let v = random(ind);
        let dO = "the "+ random(posN);
        let iO = random(other.preposition) +" the "+ random(posN);
        return s +" "+ v +" "+ dO +" "+ iO;
    }
    return sentence;
}