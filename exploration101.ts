export{} //solves duplicate function error

function showText() {
    
    const textDisplayDiv = document.getElementById("textDisplay");

    var textToDisplay = "testing";

    if (textDisplayDiv) textDisplayDiv.innerHTML = textToDisplay;
}