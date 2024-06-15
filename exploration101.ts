export{} //solves duplicate function error
// yet produces in the browser logs a "ReferenceError: exports is not defined"

function showText() {
    
    const textDisplayDiv = document.getElementById("textDisplay");

    var textToDisplay; // = "testing";

    textToDisplay = "testing";

    if (textDisplayDiv) textDisplayDiv.innerHTML = textToDisplay;
}