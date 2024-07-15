export{} //solves duplicate function error
// yet produces in the browser logs a "ReferenceError: exports is not defined"

/*
declare global {

    var textDisplayDiv

}
*/

var textDisplayDiv = document.getElementById("textDisplay"); // not defined error gone; perhaps it doesn't point to DOM somehow
var textDisplayDiv3 = document.getElementById("textDisplay3");

let helloworld = "Hello world!";

function showTextInTextDisplay3() {
    if(textDisplayDiv3) textDisplayDiv3.innerHTML = helloworld;
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

    if (textDisplayDiv) textDisplayDiv.innerHTML = textToDisplay; // HTML element is not updated with global variable despite fixing not defined error for textDisplayDiv
}

function showText2() {
    
    const textDisplayDiv2 = document.getElementById("textDisplay2");

    var textToDisplay; // = "testing";

    textToDisplay = "testing2";

    textToDisplay = 2;

    var someNumber = 2;

    var oneMoreNumber;

    // oneMoreNumber += textToDisplay + someNumber; //results in NaN
    oneMoreNumber = textToDisplay + someNumber;

    console.log(oneMoreNumber);

    if (textDisplayDiv2) textDisplayDiv2.innerHTML = textToDisplay;
}

function showText2_check() {
    
    const textDisplayDiv = document.getElementById("textDisplay2");

    var textToDisplay; // = "testing";

    textToDisplay = "testing2";

    textToDisplay = 2;

    var someNumber = 2;

    var oneMoreNumber;

    // oneMoreNumber += textToDisplay + someNumber; //results in NaN
    oneMoreNumber = textToDisplay + someNumber;

    console.log(oneMoreNumber);

    if (textDisplayDiv) textDisplayDiv.innerHTML = textToDisplay;
}

function sum(a, b) {
    return a + b;
  }
  module.exports = sum;