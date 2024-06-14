export{} //solves duplicate function error

var textDisplayParagraph = document.getElementById("textDisplay")?.textContent;

function showText() {
    
    var textToDisplay = "testing";

    textDisplayParagraph = textToDisplay;
}