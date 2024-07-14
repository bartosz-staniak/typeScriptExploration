export{} //solves duplicate function error
// yet produces in the browser logs a "ReferenceError: exports is not defined"

declare global {

    var textDisplayDiv

}

// textDisplayDiv = document.getElementById("textDisplay");

function showText() {
    
    const textDisplayDiv = document.getElementById("textDisplay");

    var textToDisplay; // = "testing";

    textToDisplay = "testing";

    textToDisplay = 1;

    var someNumber = 1;

    var oneMoreNumber;

    oneMoreNumber += textToDisplay + someNumber; //results in NaN

    console.log(oneMoreNumber);

    if (textDisplayDiv) textDisplayDiv.innerHTML = textToDisplay;
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