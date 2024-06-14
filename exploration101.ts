// export{} //solves duplicate function error

var textDisplayParagraph = document.getElementById("textDisplay")?.innerHTML;

function showText() {
    
    var textToDisplay = "testing";

    textDisplayParagraph = textToDisplay;
}