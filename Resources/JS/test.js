const assert = require("assert");
const {list, posFilter, contains, random} = require("./pickWord.js");

const testResponse = [
    {"word":"benefit","score":100,"numSyllables":3,"tags":["n","v"]},
    {"word":"benefits","score":90,"numSyllables":3,"tags":["n"]},
    {"word":"bonafide","score":85,"numSyllables":3,"tags":["adj"]}
]

const testResponse2 = [
    {"word":"change","score":100,"numSyllables":1,"tags":["n","v"]},
    {"word":"changed","score":90,"numSyllables":1,"tags":["adj"]},
    {"word":"chain","score":90,"numSyllables":1,"tags":["n"]}
]

const fakeList1 = ["benefit", "benefits", "bonafide"];
const fakeList2 = ["benefit", "benefits", "bonafide", "benefits", "benefit", "benefit"];

describe('generate a sentence', () => {
    it('lists each word', () => {
        let result = list(testResponse).join(', ');
        const expectedResult = "benefit, benefits, bonafide";
        assert.equal(result, expectedResult);
    })
    describe('check for desired part of speech', () => {
        it('checks if array contains "n"', () => {
            let result = contains(testResponse[0].tags, "n");
            let expectedResult = true;
            assert.equal(result, expectedResult);
        })
        it('checks if "benefit" tags contain "v"', () => {
            let result = contains(testResponse[0].tags, "n");
            let expectedResult = true;
            assert.equal(result, expectedResult);
        })
    })
    describe('filter by desired part of speech', () => {
        it('filters verbs', () => {
            let filtered = posFilter(testResponse, "v");
            let result = list(filtered).join(', ');
            let expectedResult = "benefit";
            assert.equal(result, expectedResult);
        })
        it('filters nouns', () => {
            let filtered = posFilter(testResponse, "n");
            let result = list(filtered).join(', ');
            let expectedResult = "benefit, benefits";
            assert.equal(result, expectedResult);
        })
    })
    describe('random() returns an item', () => {
        it('select random item from list', () => {
            let arr = list(testResponse);
            let result = [random(arr)].length;
            let expectedResult = 1;
            assert.equal(result, expectedResult);
        })
    })
})
describe('ensure there are no unnecessary repeats in the word list', () => {
    describe('Record how many times each word appears in another other ilst', () => {
        it('record instances of "benefit" in fakeList2', () => {
            let result = wordInstances("benefit", fakeList2);
            let expectedResult = 3;
            assert.equal(result, expectedResult);
        })
        it('record instances of "benefits" in fakeList2', () => {
            let result = wordInstances("benefits", fakeList2);
            let expectedResult = 2;
            assert.equal(result, expectedResult);
        })
        it('record instances in fakeList2 of each item in fakeList1', () => {
            let result = listInstances(fakeList1, fakeList2);
            let expectedResult = ["benefit: 3", "benefits: 2", "bonafide: 1"];
            assert.equal(result, expectedResult);
        })
    })
})