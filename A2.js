"use strict";
// Assignment No.2:
// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1.Scrambled Array:
// Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// •Use methods like split(), join(), push(), pop(), shift(), and unshift()to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or create temporary arrays).
// • Output the Result:
// •Use join()to combine elements back into a single string: "I am a student of GIAIC".
// Answer:
// 1. Scrambled Array:
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// function to rearrange and form the desired sentence
function rearrangeArray(array) {
    // convert non-strings (booleans, numbers) to strings if needed.
    const stringArray = array.map(element => element.toString());
    // Rearrange elements
    const rearrangeArray = [];
    rearrangeArray.push(stringArray[7]);
    rearrangeArray.push(stringArray[4]);
    rearrangeArray.push(stringArray[5]);
    rearrangeArray.push(stringArray[0]);
    rearrangeArray.push(stringArray[1]);
    rearrangeArray.push(stringArray[6]);
    // Combine elements back into a single string
    const result = rearrangeArray.join(" ");
    return result;
}
const resultSentence = rearrangeArray(scrambledArray);
console.log(resultSentence);
