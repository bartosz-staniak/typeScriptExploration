export{} //solves duplicate function error
// yet produces in the browser logs a "ReferenceError: exports is not defined"

function showText() {
    
    const textDisplayDiv = document.getElementById("textDisplay");

    const var textToDisplay; // = "testing";

    textToDisplay = "testing";

    textToDisplay = 3;

    var someNumber = 2;

    var oneMoreNumber;

    oneMoreNumber = textToDisplay + someNumber;

    console.log(oneMoreNumber);

    if (textDisplayDiv) textDisplayDiv.innerHTML = textToDisplay;
}