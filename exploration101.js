"use strict";
exports.__esModule = true;
// yet produces in the browser logs a "ReferenceError: exports is not defined"
/*
declare global {

    var textDisplayDiv

}
*/
var textDisplayDiv = document.getElementById("textDisplay"); // not defined error gone; perhaps it doesn't point to DOM somehow
// var textDisplayDiv3 = document.getElementById("textDisplay3");
var textDisplayDiv3;
var a = 10;
var helloworld = "Hello world!";
function getTextDisplayDiv3() {
    textDisplayDiv3 = document.getElementById("textDisplay3");
    return textDisplayDiv3;
}
function showTextInTextDisplay3() {
    // var returnedTextDisplayDiv3 = getTextDisplayDiv3();
    // let helloworld = "Hello world!"; // string is printed correctly as innerHTML when the variable scope is this function
    console.log(helloworld);
    var returnedTextDisplayDiv3 = document.getElementById("textDisplay3");
    if (returnedTextDisplayDiv3)
        returnedTextDisplayDiv3.innerHTML = helloworld; // prints 'undefined' on the page
}
function showText() {
    // var textDisplayDiv = document.getElementById("textDisplay");
    var textToDisplay; // = "testing";
    textToDisplay = "testing";
    textToDisplay = 1;
    var someNumber = 1;
    var oneMoreNumber;
    oneMoreNumber += textToDisplay + someNumber; //results in NaN
    console.log(oneMoreNumber);
    console.log(a);
    if (textDisplayDiv)
        textDisplayDiv.innerHTML = textToDisplay; // HTML element is not updated with global variable despite fixing not defined error for textDisplayDiv
}
function showText2() {
    var textDisplayDiv2 = document.getElementById("textDisplay2");
    var textToDisplay; // = "testing";
    textToDisplay = "testing2";
    textToDisplay = 2;
    var someNumber = 2;
    var oneMoreNumber;
    // oneMoreNumber += textToDisplay + someNumber; //results in NaN
    oneMoreNumber = textToDisplay + someNumber;
    console.log(oneMoreNumber);
    if (textDisplayDiv2)
        textDisplayDiv2.innerHTML = textToDisplay;
}
function showText2_check() {
    var textDisplayDiv = document.getElementById("textDisplay2");
    var textToDisplay; // = "testing";
    textToDisplay = "testing2";
    textToDisplay = 2;
    var someNumber = 2;
    var oneMoreNumber;
    // oneMoreNumber += textToDisplay + someNumber; //results in NaN
    oneMoreNumber = textToDisplay + someNumber;
    console.log(oneMoreNumber);
    if (textDisplayDiv)
        textDisplayDiv.innerHTML = textToDisplay;
}
function sum(a, b) {
    return a + b;
}
module.exports = sum;
module.exports = a;
