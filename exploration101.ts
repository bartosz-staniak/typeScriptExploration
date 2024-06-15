// export{} //solves duplicate function error

const textDisplayParagraph = document.getElementById("textDisplay")?.innerHTML;

function showText() {
    
    var textToDisplay = "testing";

    textDisplayParagraph = textToDisplay;
}