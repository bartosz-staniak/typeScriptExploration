// export{} //solves duplicate function error
function showText() {
    var textDisplayParagraph = document.getElementById("textDisplay");
    var textToDisplay = "testing";
    if (textDisplayParagraph)
        textDisplayParagraph.innerHTML = textToDisplay;
}
