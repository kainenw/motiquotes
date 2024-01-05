const contains = (arr, pos) => {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === pos) {
                return true;
            }
        }
        return false;
}

const random = (arr) => {
    let range = arr.length;
    let i = Math.floor(Math.random() * range)
    if(range === 1){
        return arr[0];
    } else {
        return arr[i];
    }
}

const list = (response, pos) => {
    let arr = [];
    for(let i = 0; i < response.length; i++) {
        arr.push(response[i].word);
    }
    return arr;
}

const posFilter = (arr, pos) => {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        if(contains(arr[i].tags, pos)) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

const pick = (arr, pos) => {
    const filtered = posFilter(arr, pos);
    const result = random(filtered).word;
    return result;
}

const pickV = (arr) => {
    return pick(arr, "v");
}

const pickN = (arr) => {
    return pick(arr, "n");
}

//const pickAdj = (arr) => {
    //return pick(arr, "adj");
//}

const randomWord = () => {
    return random(words);
}

//module.exports = { list, posFilter, contains, random };
export { pickV, pickN, list, randomWord, random};
